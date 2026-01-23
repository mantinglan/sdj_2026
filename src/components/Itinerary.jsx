import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  writeBatch,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { initialItineraryData } from "../data/initialData";
import {
  Calendar,
  Plus,
  Trash2,
  X,
  GripVertical,
  ExternalLink,
  Youtube,
  Map,
  CheckCircle,
  Lock,
  Cloud,
  Sun,
  CloudRain,
  Snowflake,
  RefreshCw,
  MapPin,
  Clock,
  Info,
  Edit,
  Image as ImageIcon,
  BookOpen,
  Train,
  Car,
  Plane,
} from "lucide-react";

// dnd-kit
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import Header from "./Header";

// --- Linkify 元件 ---
const Linkify = ({ text }) => {
  if (!text) return null;
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  return (
    <span className="leading-loose whitespace-pre-wrap">
      {parts.map((part, i) => {
        if (part.match(urlRegex)) {
          let Icon = ExternalLink;
          let label = "連結";
          if (part.includes("google") && part.includes("map")) {
            Icon = Map;
            label = "地圖";
          } else if (part.includes("youtube") || part.includes("youtu.be")) {
            Icon = Youtube;
            label = "影片";
          }
          return (
            <a
              key={i}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sage-600 text-xs font-bold hover:bg-sage-50 mx-1 my-1 px-2 py-1 rounded-lg border border-sage-200 transition-all align-middle shadow-sm bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <Icon size={12} />{" "}
              <span className="truncate max-w-[120px]">{label}</span>
            </a>
          );
        }
        return part;
      })}
    </span>
  );
};

// --- WeatherBadge 元件 ---
const WeatherBadge = ({ lat, lng, large = false }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!lat || !lng) return;

    const fetchWeather = async () => {
      const cacheKey = `trip_weather_${lat}_${lng}`;
      const CACHE_DURATION = 60 * 60 * 1000;

      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        try {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION) {
            setWeather(data);
            setLoading(false);
            return;
          }
        } catch (e) {
          localStorage.removeItem(cacheKey);
        }
      }

      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true&timezone=auto`
        );
        const result = await res.json();
        if (result.current_weather) {
          setWeather(result.current_weather);
          localStorage.setItem(
            cacheKey,
            JSON.stringify({
              data: result.current_weather,
              timestamp: Date.now(),
            })
          );
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lng]);

  if (!lat || !lng || !weather) return null;
  if (loading) return null;

  const getWeatherIcon = (code) => {
    const size = large ? 20 : 14;
    if (code <= 1) return <Sun size={size} className="text-orange-400" />;
    if (code <= 3) return <Cloud size={size} className="text-tea-300" />;
    if (code >= 71) return <Snowflake size={size} className="text-blue-300" />;
    if (code >= 51) return <CloudRain size={size} className="text-blue-400" />;
    return <Cloud size={size} className="text-tea-300" />;
  };

  return (
    <div
      className={`flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full border border-milk-200 shadow-sm w-fit ${
        large ? "px-3 py-1.5" : "px-2.5 py-1"
      }`}
    >
      {getWeatherIcon(weather.weathercode)}
      <span
        className={`${
          large ? "text-sm" : "text-[10px]"
        } font-mono font-bold text-coffee-700 tracking-tight`}
      >
        {weather.temperature}°C
      </span>
    </div>
  );
};

// --- SortableItem (🟢 修正版：結構統一，僅換底色) ---
const SortableItem = ({ event, user, onClick, handleDelete }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: event.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : "auto",
    opacity: isDragging ? 0.9 : 1,
  };

  // 判斷是否為「交通/移動」
  const isTransport =
    event.title.includes("前往") ||
    event.title.includes("抵達") ||
    event.title.includes("機場") ||
    event.title.includes("搭乘");

  // 決定交通圖示 (如果有的話)
  let TransportIcon = null;
  if (event.title.includes("機場") || event.title.includes("飛"))
    TransportIcon = Plane;
  else if (
    event.title.includes("JR") ||
    event.title.includes("新幹線") ||
    event.title.includes("列車")
  )
    TransportIcon = Train;
  else if (isTransport) TransportIcon = Car;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        relative flex gap-3 group transition-all mb-4 cursor-pointer
        p-4 pl-2 rounded-2xl border
        ${
          isTransport
            ? "bg-milk-100/60 border-milk-200" // 🟢 交通：灰色底
            : "bg-white border-milk-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-sage-200" // ⚪ 一般：白底
        }
        ${isDragging ? "shadow-xl ring-2 ring-sage-400 bg-sage-50/30" : ""}
        active:scale-[0.99]
      `}
      onClick={() => onClick(event)}
    >
      {/* 拖曳手把 */}
      {user.role === "admin" && (
        <div
          {...attributes}
          {...listeners}
          className="absolute top-2 right-2 z-20 flex items-center justify-center text-tea-200 hover:text-sage-400 cursor-grab active:cursor-grabbing touch-none"
        >
          <GripVertical size={18} />
        </div>
      )}

      {/* 左側：時間軸 (🟢 結構完全一致，保證不歪) */}
      <div className="flex flex-col items-center pt-1 w-14 flex-shrink-0 relative">
        {event.time && (
          <div
            className={`
            font-bold text-xs px-2 py-1 rounded-md whitespace-nowrap z-10 shadow-sm
            ${
              isTransport
                ? "bg-milk-200 text-coffee-600"
                : "bg-sage-100 text-sage-700"
            }
          `}
          >
            {event.time}
          </div>
        )}

        {/* 線條：交通用虛線，其他用實線 */}
        <div
          className={`
          w-[2px] h-[140%] absolute top-8
          ${
            isTransport
              ? "border-l-2 border-dotted border-milk-300"
              : "bg-milk-200/80"
          }
        `}
        ></div>
      </div>

      {/* 右側：內容 (🟢 結構完全一致) */}
      <div className="flex-1 pb-1 pr-6 min-w-0">
        {/* 標題區：如果有交通圖示，放在標題旁邊 */}
        <div className="flex items-center gap-2 mb-2">
          {isTransport && TransportIcon && (
            <div className="text-sage-500 bg-white p-1 rounded-md shadow-sm border border-milk-200/50">
              <TransportIcon size={16} />
            </div>
          )}
          <h3
            className={`font-bold text-[17px] leading-tight truncate ${
              isTransport ? "text-coffee-700" : "text-coffee-900"
            }`}
          >
            {event.title}
          </h3>
        </div>

        {/* 天氣 */}
        {event.lat && (
          <div className="mb-3">
            <WeatherBadge lat={event.lat} lng={event.lng} />
          </div>
        )}

        {/* Note 預覽 */}
        {event.note && (
          <div
            className={`text-sm text-coffee-700 p-3 rounded-xl border border-milk-100/50 ${
              isTransport ? "bg-white/60" : "bg-milk-50"
            }`}
          >
            <Linkify text={event.note} />
          </div>
        )}
      </div>

      {/* 刪除按鈕 */}
      {user.role === "admin" && (
        <button
          onClick={(e) => handleDelete(e, event.id)}
          className="absolute top-2 right-8 p-1.5 text-milk-300 hover:text-red-400 transition-colors z-10"
        >
          <Trash2 size={16} />
        </button>
      )}
    </div>
  );
};

// --- 主元件 ---
const Itinerary = () => {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [activeOption, setActiveOption] = useState("A");
  const [finalChoice, setFinalChoice] = useState(null);

  // Modals
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const [isEditMode, setIsEditMode] = useState(false);
  const [currentEventId, setCurrentEventId] = useState(null);
  const [viewingEvent, setViewingEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    time: "",
    date: "",
    note: "",
    details: "",
    group: "",
  });

  const [isSyncing, setIsSyncing] = useState(false);

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 10 } }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 250, tolerance: 5 },
    })
  );

  // 資料監聽
  useEffect(() => {
    const q = query(
      collection(db, "itinerary"),
      orderBy("date"),
      orderBy("sortOrder", "asc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const eventsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(eventsData);
      if (eventsData.length > 0) {
        setSelectedDate((prev) => {
          if (prev) return prev;
          const dates = [...new Set(eventsData.map((e) => e.date))].sort();
          return dates.length > 0 ? dates[0] : "";
        });
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubSettings = onSnapshot(
      doc(db, "settings", "tripConfig"),
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          setFinalChoice(data.day5Choice);
          if (data.day5Choice) {
            setActiveOption(data.day5Choice);
          }
        }
      }
    );
    return () => unsubSettings();
  }, []);

  const confirmOption = async (option) => {
    if (!confirm(`確定設為最終方案？`)) return;
    await setDoc(
      doc(db, "settings", "tripConfig"),
      { day5Choice: option },
      { merge: true }
    );
  };
  const resetOption = async () => {
    if (!confirm("重置方案？")) return;
    await setDoc(
      doc(db, "settings", "tripConfig"),
      { day5Choice: null },
      { merge: true }
    );
  };

  const handleSyncItinerary = async () => {
    if (
      !confirm(
        "⚠️ 警告：這將會「刪除 Firebase 上所有舊行程」並用 initialData.js 的內容覆蓋。\n\n確定要同步嗎？"
      )
    )
      return;
    setIsSyncing(true);
    try {
      const batch = writeBatch(db);
      const q = query(collection(db, "itinerary"));
      const snapshot = await getDocs(q);
      snapshot.docs.forEach((doc) => batch.delete(doc.ref));
      const tempGroups = initialItineraryData.reduce((groups, event) => {
        if (!groups[event.date]) groups[event.date] = [];
        groups[event.date].push(event);
        return groups;
      }, {});
      Object.keys(tempGroups).forEach((date) => {
        tempGroups[date].forEach((item, index) => {
          const docRef = doc(collection(db, "itinerary"));
          batch.set(docRef, {
            ...item,
            sortOrder: index,
            createdAt: new Date(),
          });
        });
      });
      await batch.commit();
      alert("✅ 行程同步完成！");
    } catch (error) {
      console.error("同步失敗:", error);
      alert("❌ 同步失敗");
    } finally {
      setIsSyncing(false);
    }
  };

  const groupedEvents = events.reduce((groups, event) => {
    const date = event.date;
    if (!groups[date]) groups[date] = [];
    groups[date].push(event);
    return groups;
  }, {});
  const rawEvents = groupedEvents[selectedDate] || [];
  const hasOptions =
    rawEvents.some((e) => e.group === "A") &&
    rawEvents.some((e) => e.group === "B");
  const displayedEvents = rawEvents.filter((event) => {
    if (!hasOptions) return true;
    if (!event.group) return true;
    return event.group === activeOption;
  });
  const allDates = Object.keys(groupedEvents).sort();

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = displayedEvents.findIndex((item) => item.id === active.id);
    const newIndex = displayedEvents.findIndex((item) => item.id === over.id);
    const newOrderList = arrayMove(displayedEvents, oldIndex, newIndex);
    const batch = writeBatch(db);
    newOrderList.forEach((item, index) => {
      const docRef = doc(db, "itinerary", item.id);
      batch.update(docRef, { sortOrder: index });
    });
    try {
      await batch.commit();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    if (confirm("刪除此行程？")) await deleteDoc(doc(db, "itinerary", id));
  };

  // Modals
  const openAddModal = () => {
    setIsEditMode(false);
    setFormData({
      title: "",
      time: "",
      date: selectedDate || "",
      note: "",
      details: "",
      group: hasOptions ? activeOption : "",
    });
    setIsEditModalOpen(true);
  };

  const handleItemClick = (event) => {
    setViewingEvent(event);
    setIsDetailsModalOpen(true);
  };

  const switchToEditMode = () => {
    if (!viewingEvent) return;
    setIsDetailsModalOpen(false);
    setIsEditMode(true);
    setCurrentEventId(viewingEvent.id);
    setFormData({
      title: viewingEvent.title,
      time: viewingEvent.time,
      date: viewingEvent.date,
      note: viewingEvent.note || "",
      details: viewingEvent.details || "",
      group: viewingEvent.group || "",
    });
    setIsEditModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title) return;
    if (isEditMode) {
      await updateDoc(doc(db, "itinerary", currentEventId), { ...formData });
    } else {
      const lastOrder =
        displayedEvents.length > 0
          ? Math.max(...displayedEvents.map((e) => e.sortOrder || 0))
          : -1;
      await addDoc(collection(db, "itinerary"), {
        ...formData,
        sortOrder: lastOrder + 1,
        createdAt: new Date(),
      });
      setSelectedDate(formData.date);
    }
    setIsEditModalOpen(false);
  };

  const getDayInfo = (d) => {
    const days = ["(日)", "(一)", "(二)", "(三)", "(四)", "(五)", "(六)"];
    const date = new Date(d);
    return isNaN(date) ? "" : days[date.getDay()];
  };
  const formatShortDate = (d) =>
    `${new Date(d).getMonth() + 1}/${new Date(d).getDate()}`;

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-milk-50">
      <Header
        title="東北之旅"
        icon={Calendar}
        rightContent={
          user.role === "admin" && (
            <button
              onClick={handleSyncItinerary}
              disabled={isSyncing}
              className={`text-xs bg-sage-100 text-sage-700 px-3 py-1.5 rounded-full flex items-center gap-1 border border-sage-200 font-bold hover:bg-sage-200 transition-all ${
                isSyncing ? "opacity-50 cursor-wait" : ""
              }`}
            >
              <RefreshCw
                size={14}
                className={isSyncing ? "animate-spin" : ""}
              />
              {isSyncing ? "同步中..." : "同步行程"}
            </button>
          )
        }
      >
        <div className="flex overflow-x-auto px-4 gap-3 no-scrollbar scroll-smooth">
          {allDates.length > 0 ? (
            allDates.map((date, index) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`flex-shrink-0 flex flex-col items-center justify-center px-4 py-2 rounded-2xl transition-all border ${
                  selectedDate === date
                    ? "bg-sage-500 text-white border-sage-500 shadow-md scale-[1.03]"
                    : "bg-white text-tea-400 border-milk-200/80 hover:bg-milk-100 hover:border-sage-200"
                }`}
              >
                <span
                  className={`text-[11px] font-medium ${
                    selectedDate === date ? "text-white/90" : "text-tea-300"
                  }`}
                >
                  Day {index + 1}
                </span>
                <span className="text-[13px] font-bold whitespace-nowrap mt-0.5">
                  {formatShortDate(date)} {getDayInfo(date)}
                </span>
              </button>
            ))
          ) : (
            <div className="text-sm text-tea-300 px-2 py-4">載入中...</div>
          )}
        </div>
      </Header>

      <div className="flex-1 overflow-y-auto p-4 pb-24 touch-pan-y">
        {displayedEvents.length > 0 || hasOptions ? (
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-5 opacity-60">
              <div className="h-[1px] bg-milk-300 flex-1"></div>
              <span className="text-xs text-coffee-600 font-medium tracking-widest">
                {selectedDate} 行程
              </span>
              <div className="h-[1px] bg-milk-300 flex-1"></div>
            </div>

            {hasOptions && (
              <div className="mb-6">
                <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-milk-200 flex relative">
                  <button
                    onClick={() => setActiveOption("A")}
                    className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all relative z-10 flex flex-col items-center ${
                      activeOption === "A"
                        ? "text-coffee-900"
                        : "text-tea-400 hover:text-coffee-700"
                    }`}
                  >
                    <span>Option 1</span>
                    <span className="text-xs opacity-80 font-normal mt-0.5">
                      仙台市區
                    </span>
                    {finalChoice === "A" && (
                      <CheckCircle size={16} className="text-sage-500 mt-1" />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveOption("B")}
                    className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all relative z-10 flex flex-col items-center ${
                      activeOption === "B"
                        ? "text-coffee-900"
                        : "text-tea-400 hover:text-coffee-700"
                    }`}
                  >
                    <span>Option 2</span>
                    <span className="text-xs opacity-80 font-normal mt-0.5">
                      松島半日遊
                    </span>
                    {finalChoice === "B" && (
                      <CheckCircle size={16} className="text-sage-500 mt-1" />
                    )}
                  </button>
                  <div
                    className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-sage-50/80 border border-sage-100 rounded-xl transition-all duration-300 ease-out shadow-sm ${
                      activeOption === "B"
                        ? "translate-x-[100%] ml-1.5"
                        : "translate-x-0"
                    }`}
                  ></div>
                </div>
                {user.role === "admin" && (
                  <div className="mt-3 flex justify-end">
                    {finalChoice === activeOption ? (
                      <button
                        onClick={resetOption}
                        className="text-xs flex items-center gap-1 text-tea-400 bg-white px-3 py-1.5 rounded-full border border-milk-200 font-medium"
                      >
                        <Lock size={12} /> 已鎖定 (重置)
                      </button>
                    ) : (
                      <button
                        onClick={() => confirmOption(activeOption)}
                        className="text-xs flex items-center gap-1 text-white bg-sage-500 hover:bg-sage-600 px-3 py-1.5 rounded-full shadow-sm font-bold transition-colors"
                      >
                        <CheckCircle size={12} /> 設為最終方案
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}

            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={displayedEvents.map((e) => e.id)}
                strategy={verticalListSortingStrategy}
              >
                {displayedEvents.map((event) => (
                  <SortableItem
                    key={event.id}
                    event={event}
                    user={user}
                    onClick={handleItemClick}
                    handleDelete={handleDelete}
                  />
                ))}
              </SortableContext>
            </DndContext>
            <div className="text-center text-tea-200 text-sm py-6 italic font-serif">
              - End of Day -
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center pt-24 text-tea-300 gap-2">
            <Calendar size={40} className="opacity-50" />
            <span>今天沒有安排行程</span>
          </div>
        )}
      </div>

      {user.role === "admin" && (
        <button
          onClick={openAddModal}
          className="fixed bottom-24 right-5 bg-sage-600 text-white p-4 rounded-full shadow-lg shadow-sage-600/30 hover:bg-sage-700 hover:scale-105 active:scale-95 z-40 transition-all"
        >
          <Plus size={28} />
        </button>
      )}

      {/* Details Modal */}
      {isDetailsModalOpen && viewingEvent && (
        <div
          className="fixed inset-0 bg-coffee-900/40 backdrop-blur-md z-[60] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsDetailsModalOpen(false)}
        >
          <div
            className="bg-[#FDFCF8] w-full max-w-sm rounded-[2rem] shadow-2xl border border-white overflow-hidden flex flex-col max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-48 bg-sage-100 relative flex items-center justify-center overflow-hidden">
              {viewingEvent.image ? (
                <img
                  src={viewingEvent.image}
                  alt={viewingEvent.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-sage-500/10"></div>
                  <ImageIcon size={48} className="text-white/40" />
                </>
              )}

              <button
                onClick={() => setIsDetailsModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 text-white backdrop-blur-md flex items-center justify-center hover:bg-black/30 transition-colors z-20"
              >
                <X size={18} />
              </button>

              {viewingEvent.lat && (
                <div className="absolute bottom-4 left-6 z-10">
                  <WeatherBadge
                    lat={viewingEvent.lat}
                    lng={viewingEvent.lng}
                    large
                  />
                </div>
              )}
            </div>

            <div className="p-6 pt-5 overflow-y-auto">
              <div className="flex justify-between items-start gap-4 mb-2">
                <h2 className="text-2xl font-bold text-coffee-800 leading-tight">
                  {viewingEvent.title}
                </h2>
                {viewingEvent.time && (
                  <span className="flex-shrink-0 bg-sage-100 text-sage-700 font-bold px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                    <Clock size={14} /> {viewingEvent.time}
                  </span>
                )}
              </div>

              {viewingEvent.note && (
                <div className="mt-5">
                  <h4 className="text-xs font-bold text-tea-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Info size={14} /> 實用筆記 (Note)
                  </h4>
                  <div className="text-coffee-700 text-[15px] leading-relaxed bg-milk-50 p-4 rounded-2xl border border-milk-100">
                    <Linkify text={viewingEvent.note} />
                  </div>
                </div>
              )}

              {viewingEvent.details && (
                <div className="mt-6">
                  <h4 className="text-xs font-bold text-tea-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <BookOpen size={14} /> 景點介紹 / 故事
                  </h4>
                  <div className="text-coffee-600 text-[15px] leading-7 whitespace-pre-wrap">
                    <Linkify text={viewingEvent.details} />
                  </div>
                </div>
              )}

              {!viewingEvent.note && !viewingEvent.details && (
                <div className="text-tea-300 italic text-sm text-center py-8">
                  沒有詳細資訊
                </div>
              )}

              {/* {viewingEvent.lat && (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${viewingEvent.lat},${viewingEvent.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-sage-50 text-sage-600 font-bold rounded-xl border border-sage-200 hover:bg-sage-100 transition-all"
                >
                  <MapPin size={18} /> 開啟 Google Maps 導航
                </a>
              )} */}

              {user.role === "admin" && (
                <button
                  onClick={switchToEditMode}
                  className="mt-4 w-full py-3 flex items-center justify-center gap-2 text-tea-400 hover:text-sage-500 font-bold text-sm transition-colors border-t border-milk-200 pt-4"
                >
                  <Edit size={16} /> 編輯此行程
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Edit/Add Modal */}
      {isEditModalOpen && (
        <div
          className="fixed inset-0 bg-coffee-900/40 backdrop-blur-md z-[70] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsEditModalOpen(false)}
        >
          <div
            className="bg-[#FDFCF8] w-full max-w-md rounded-[2rem] p-6 shadow-2xl border border-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-coffee-800">
                {isEditMode ? "編輯行程" : "新增行程"}
              </h3>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="w-9 h-9 rounded-full bg-milk-100 flex items-center justify-center text-coffee-500 hover:bg-milk-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="text-xs font-bold text-tea-400 ml-1 mb-1 block">
                    日期
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full p-3.5 bg-white border border-milk-200 rounded-2xl outline-none focus:ring-2 focus:ring-sage-200 focus:border-sage-300 transition-all text-coffee-800 shadow-sm"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                  />
                </div>
                <div className="flex-1">
                  <label className="text-xs font-bold text-tea-400 ml-1 mb-1 block">
                    時間
                  </label>
                  <input
                    type="time"
                    required
                    className="w-full p-3.5 bg-white border border-milk-200 rounded-2xl outline-none focus:ring-2 focus:ring-sage-200 focus:border-sage-300 transition-all text-coffee-800 shadow-sm"
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                  />
                </div>
              </div>
              <input
                type="text"
                placeholder="行程名稱"
                required
                className="w-full p-3.5 bg-white border border-milk-200 rounded-2xl outline-none focus:ring-2 focus:ring-sage-200 focus:border-sage-300 transition-all text-coffee-800 font-bold shadow-sm"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />

              <div>
                <label className="text-xs font-bold text-tea-400 ml-1 mb-1 block">
                  詳細介紹 / 故事 (Modal 顯示)
                </label>
                <textarea
                  rows="4"
                  placeholder="關於這個景點的故事..."
                  className="w-full p-3.5 bg-white border border-milk-200 rounded-2xl outline-none focus:ring-2 focus:ring-sage-200 focus:border-sage-300 transition-all text-sm text-coffee-800 shadow-sm"
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({ ...formData, details: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-xs font-bold text-tea-400 ml-1 mb-1 block">
                  備註 (列表顯示)
                </label>
                <textarea
                  rows="2"
                  placeholder="注意事項、網址..."
                  className="w-full p-3.5 bg-white border border-milk-200 rounded-2xl outline-none focus:ring-2 focus:ring-sage-200 focus:border-sage-300 transition-all text-sm text-coffee-800 shadow-sm"
                  value={formData.note}
                  onChange={(e) =>
                    setFormData({ ...formData, note: e.target.value })
                  }
                />
              </div>

              {hasOptions && (
                <div>
                  <label className="text-xs font-bold text-tea-400 ml-1 mb-1 block">
                    屬於哪個方案？
                  </label>
                  <select
                    className="w-full p-3.5 bg-white border border-milk-200 rounded-2xl outline-none focus:ring-2 focus:ring-sage-200 focus:border-sage-300 transition-all text-coffee-800 shadow-sm"
                    value={formData.group}
                    onChange={(e) =>
                      setFormData({ ...formData, group: e.target.value })
                    }
                  >
                    <option value="">共同行程</option>
                    <option value="A">Option 1: 仙台市區</option>
                    <option value="B">Option 2: 松島</option>
                  </select>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-sage-600 text-white py-3.5 rounded-2xl font-bold text-lg mt-4 hover:bg-sage-700 shadow-lg shadow-sage-600/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                {isEditMode ? "儲存變更" : "確認新增"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Itinerary;
