import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { defaultTodoList } from "../data/initialData";
import Header from "./Header";
import {
  CheckSquare,
  Plus,
  Trash2,
  X,
  Link as LinkIcon,
  ExternalLink,
  MapPin,
  ShoppingBag,
  CheckCircle2,
  Circle,
  AlertTriangle, // 新增警告圖示
} from "lucide-react";

// 產生隨機 ID 的小工具
const generateId = () => Math.random().toString(36).substr(2, 9);

const Todos = () => {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Add Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [newLink, setNewLink] = useState("");

  // 🟢 Delete Modal States (新增刪除確認相關狀態)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  // 1. 監聽該使用者的 Document
  useEffect(() => {
    if (!user) return;

    const docRef = doc(db, "user_todos", user.name);

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setTodos(docSnap.data().items || []);
        setLoading(false);
      } else {
        initUserDoc(docRef);
      }
    });

    return () => unsubscribe();
  }, [user]);

  // 初始化使用者的 Document
  const initUserDoc = async (docRef) => {
    console.log("初始化新用戶資料...");
    try {
      const initialItems = defaultTodoList.map((item) => ({
        id: generateId(),
        text: item.text,
        link: "",
        completed: false,
        createdAt: new Date().toISOString(),
      }));

      await setDoc(docRef, {
        items: initialItems,
        lastUpdated: new Date().toISOString(),
      });
    } catch (error) {
      console.error("初始化失敗:", error);
    }
  };

  // 新增待辦
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;

    const newTodo = {
      id: generateId(),
      text: newItem,
      link: newLink,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    try {
      const docRef = doc(db, "user_todos", user.name);
      await updateDoc(docRef, {
        items: arrayUnion(newTodo),
      });
      setNewItem("");
      setNewLink("");
      setIsModalOpen(false);
    } catch (error) {
      console.error("新增失敗:", error);
      alert("新增失敗");
    }
  };

  // 切換完成
  const toggleComplete = async (todoId) => {
    if (navigator.vibrate) navigator.vibrate(50);

    const newTodos = todos.map((t) =>
      t.id === todoId ? { ...t, completed: !t.completed } : t
    );
    setTodos(newTodos);

    try {
      const docRef = doc(db, "user_todos", user.name);
      await updateDoc(docRef, { items: newTodos });
    } catch (error) {
      console.error("更新失敗:", error);
    }
  };

  // 🟢 觸發刪除確認 (不直接刪除，而是打開 Modal)
  const promptDelete = (e, todoId) => {
    e.stopPropagation();
    setTodoToDelete(todoId);
    setIsDeleteModalOpen(true);
  };

  // 🟢 確認刪除 (使用者按了 Modal 的確認鈕)
  const confirmDelete = async () => {
    if (!todoToDelete) return;

    const newTodos = todos.filter((t) => t.id !== todoToDelete);
    setTodos(newTodos); // Optimistic update

    try {
      const docRef = doc(db, "user_todos", user.name);
      await updateDoc(docRef, { items: newTodos });
    } catch (error) {
      console.error("刪除失敗:", error);
    }

    // 關閉視窗並清空狀態
    setIsDeleteModalOpen(false);
    setTodoToDelete(null);
  };

  const getLinkIcon = (url) => {
    if (url.includes("google") && url.includes("map"))
      return <MapPin size={12} />;
    if (
      url.includes("shopee") ||
      url.includes("amazon") ||
      url.includes("rakuten")
    )
      return <ShoppingBag size={12} />;
    return <ExternalLink size={12} />;
  };

  const completedCount = todos.filter((t) => t.completed).length;
  const progress = todos.length > 0 ? (completedCount / todos.length) * 100 : 0;

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-milk-50 font-sans text-coffee-900">
      {/* Header */}
      <Header title={`${user?.name} 的待辦`} icon={CheckSquare}>
        <div className="px-4 pb-2">
          <div className="flex justify-between items-end mb-1.5">
            <span className="text-xs font-bold text-sage-500 tracking-wider uppercase">
              Your Progress
            </span>
            <span className="text-xs font-bold text-coffee-600">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="w-full h-2.5 bg-milk-200 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-sage-500 rounded-full transition-all duration-700 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute top-0 right-0 bottom-0 w-full bg-gradient-to-l from-white/30 to-transparent"></div>
            </div>
          </div>

          <div className="text-[10px] text-tea-300 text-right mt-1 font-bold">
            {completedCount} / {todos.length} items completed
          </div>
        </div>
      </Header>

      {/* List Area */}
      <div className="flex-1 overflow-y-auto px-4 pb-24 pt-4 space-y-3">
        {loading ? (
          <div className="text-center text-tea-300 mt-10 animate-pulse">
            讀取資料中...
          </div>
        ) : todos.length > 0 ? (
          todos.map((todo) => (
            <div
              key={todo.id}
              onClick={() => toggleComplete(todo.id)}
              className={`group relative flex items-start gap-3 p-4 rounded-2xl border transition-all cursor-pointer overflow-hidden
                ${
                  todo.completed
                    ? "bg-milk-100/50 border-milk-100 opacity-70"
                    : "bg-white border-milk-200 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:border-sage-200"
                }
              `}
            >
              <div
                className={`flex-shrink-0 mt-0.5 transition-colors duration-300 ${
                  todo.completed
                    ? "text-sage-500"
                    : "text-milk-300 group-hover:text-sage-300"
                }`}
              >
                {todo.completed ? (
                  <CheckCircle2 size={22} className="fill-sage-100" />
                ) : (
                  <Circle size={22} />
                )}
              </div>

              <div className="flex-1 min-w-0 z-10">
                <div
                  className={`text-[15px] font-bold leading-relaxed transition-all duration-300 ${
                    todo.completed
                      ? "text-tea-400 line-through decoration-tea-300"
                      : "text-coffee-800"
                  }`}
                >
                  {todo.text}
                </div>

                {todo.link && (
                  <div className="mt-2">
                    <a
                      href={todo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-[11px] text-sage-600 bg-sage-50 px-2.5 py-1.5 rounded-lg border border-sage-100 hover:bg-sage-100 hover:border-sage-200 transition-all font-bold"
                    >
                      {getLinkIcon(todo.link)}
                      <span>
                        {todo.link.includes("map") ? "開啟地圖" : "查看連結"}
                      </span>
                    </a>
                  </div>
                )}
              </div>

              {/* 🟢 修改刪除按鈕觸發事件 */}
              <button
                onClick={(e) => promptDelete(e, todo.id)}
                className="p-2 -mr-2 -mt-2 text-milk-300 hover:text-red-400 transition-colors z-20"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center pt-20 text-tea-300 gap-2 opacity-50">
            <CheckSquare size={48} />
            <p>清單是空的</p>
          </div>
        )}
      </div>

      {/* FAB */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-24 right-5 bg-sage-600 text-white p-4 rounded-full shadow-lg shadow-sage-600/30 hover:bg-sage-700 hover:scale-105 active:scale-95 z-40 transition-all"
      >
        <Plus size={28} />
      </button>

      {/* Add Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-coffee-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-[#FDFCF8] w-full max-w-sm rounded-[2rem] p-6 shadow-2xl border border-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-coffee-800">新增待辦</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-9 h-9 rounded-full bg-milk-100 flex items-center justify-center text-coffee-500 hover:bg-milk-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-tea-400 ml-1 mb-1 block">
                  要做什麼？
                </label>
                <input
                  type="text"
                  placeholder="例如：買伴手禮、整理行李"
                  required
                  autoFocus
                  className="w-full p-4 bg-white border border-milk-200 rounded-2xl outline-none focus:ring-2 focus:ring-sage-200 focus:border-sage-300 text-coffee-800 placeholder-tea-300 transition-all shadow-sm font-bold"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                />
              </div>

              <div>
                <label className="text-xs font-bold text-tea-400 ml-1 mb-1 block flex items-center gap-1">
                  <LinkIcon size={12} /> 相關連結 (選填)
                </label>
                <input
                  type="url"
                  placeholder="貼上 Google Maps 或商品網址..."
                  className="w-full p-4 bg-white border border-milk-200 rounded-2xl outline-none focus:ring-2 focus:ring-sage-200 focus:border-sage-300 text-coffee-800 placeholder-tea-300 transition-all shadow-sm text-sm"
                  value={newLink}
                  onChange={(e) => setNewLink(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sage-600 text-white py-3.5 rounded-2xl font-bold text-lg mt-2 hover:bg-sage-700 shadow-lg shadow-sage-600/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                加入清單
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 🟢 Delete Confirmation Modal (新增：刪除確認視窗) */}
      {isDeleteModalOpen && (
        <div
          className="fixed inset-0 bg-coffee-900/60 backdrop-blur-md z-[110] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsDeleteModalOpen(false)}
        >
          <div
            className="bg-[#FDFCF8] w-full max-w-xs rounded-[2rem] p-6 shadow-2xl border border-white text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
              <AlertTriangle size={32} />
            </div>

            <h3 className="text-xl font-bold text-coffee-900 mb-2">
              確定刪除？
            </h3>
            <p className="text-sm text-coffee-600 mb-6 leading-relaxed">
              刪除後無法復原，
              <br />
              確定要移除這個待辦項目嗎？
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="flex-1 py-3 rounded-xl font-bold text-coffee-600 bg-milk-200 hover:bg-milk-300 transition-colors"
              >
                取消
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 py-3 rounded-xl font-bold text-white bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/20 transition-all active:scale-95"
              >
                刪除
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todos;
