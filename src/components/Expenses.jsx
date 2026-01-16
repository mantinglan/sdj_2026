// src/components/Expenses.jsx
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import Header from "./Header";
import {
  Plus,
  Trash2,
  X,
  Wallet,
  Image as ImageIcon,
  DollarSign,
  Camera,
  FileText,
  ArrowUpCircle,
  ArrowDownCircle,
} from "lucide-react";

const Expenses = () => {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [type, setType] = useState("expense");
  const [formData, setFormData] = useState({
    item: "",
    amount: "",
    payer: "公費",
    note: "",
    photo: null,
  });
  const [isUploading, setIsUploading] = useState(false);

  // 監聽 Firebase 資料
  useEffect(() => {
    const q = query(collection(db, "expenses"), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTransactions(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
    return () => unsubscribe();
  }, []);

  // 計算金額
  const totalDeposit = transactions
    .filter((t) => t.type === "deposit")
    .reduce((sum, t) => sum + Number(t.amount), 0);
  const totalExpense = transactions
    .filter((t) => t.type === "expense" || !t.type)
    .reduce((sum, t) => sum + Number(t.amount), 0);
  const balance = totalDeposit - totalExpense;

  // 處理圖片上傳預覽
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsUploading(true);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 800;
        const scaleSize = MAX_WIDTH / img.width;
        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scaleSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        setFormData((prev) => ({
          ...prev,
          photo: canvas.toDataURL("image/jpeg", 0.7),
        }));
        setIsUploading(false);
      };
    };
  };

  // 提交表單
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.item || !formData.amount) return;
    await addDoc(collection(db, "expenses"), {
      ...formData,
      type,
      amount: Number(formData.amount),
      date: new Date().toISOString(),
    });
    setFormData({ item: "", amount: "", payer: "公費", note: "", photo: null });
    setIsAddModalOpen(false);
  };

  // 刪除紀錄
  const handleDelete = async (id) => {
    if (confirm("確定刪除這筆紀錄嗎？")) {
      await deleteDoc(doc(db, "expenses", id));
      setSelectedItem(null);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-milk-50 font-sans text-coffee-900">
      {/* 🟢 Header: 採用淺色清爽版樣式 */}
      <Header title="公費錢包" icon={Wallet}>
        <div className="mt-4">
          <div className="bg-white rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border border-milk-200 p-6 relative overflow-hidden">
            {/* 背景裝飾 (淺綠色光暈) */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-sage-50 rounded-full opacity-70 blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-sage-100/50 rounded-full opacity-50 blur-2xl"></div>

            {/* 總餘額 */}
            <div className="relative z-10 text-center mb-6 mt-2">
              <div className="text-[10px] font-bold text-sage-400 tracking-widest mb-1 uppercase">
                Total Balance
              </div>
              <div
                className={`text-5xl font-extrabold tracking-tighter ${
                  balance >= 0 ? "text-coffee-800" : "text-red-500"
                }`}
              >
                <span className="text-2xl align-top mr-1 font-medium opacity-40">
                  ¥
                </span>
                {balance.toLocaleString()}
              </div>
            </div>

            {/* 存入 / 支出 小卡 */}
            <div className="relative z-10 flex justify-between items-center bg-white/60 rounded-2xl p-3 backdrop-blur-sm border border-milk-100 shadow-sm">
              <div className="flex-1 text-center border-r border-milk-200/50">
                <div className="flex items-center justify-center gap-1 text-[10px] text-sage-400 font-bold mb-0.5">
                  <ArrowDownCircle size={12} className="text-green-500" /> 存入
                </div>
                <div className="text-green-600 font-bold text-base">
                  ¥{totalDeposit.toLocaleString()}
                </div>
              </div>
              <div className="flex-1 text-center">
                <div className="flex items-center justify-center gap-1 text-[10px] text-sage-400 font-bold mb-0.5">
                  <ArrowUpCircle size={12} className="text-red-400" /> 支出
                </div>
                <div className="text-red-500 font-bold text-base">
                  ¥{totalExpense.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Header>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-4 pb-24 pt-2 space-y-3">
        <div className="text-xs font-bold text-tea-300 pl-4 mt-2 mb-1">
          近期紀錄
        </div>
        {transactions.map((t) => (
          <div
            key={t.id}
            onClick={() => setSelectedItem(t)}
            className="bg-white p-4 rounded-2xl shadow-sm border border-milk-100 flex justify-between items-center cursor-pointer active:scale-[0.98] transition-transform hover:shadow-md hover:border-sage-100"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-sm ${
                  t.type === "deposit"
                    ? "bg-gradient-to-br from-green-400 to-green-600"
                    : "bg-gradient-to-br from-sage-400 to-sage-600"
                }`}
              >
                {t.photo ? (
                  <ImageIcon size={20} className="text-white/90" />
                ) : t.type === "deposit" ? (
                  <DollarSign size={20} className="text-white/90" />
                ) : (
                  <FileText size={20} className="text-white/90" />
                )}
              </div>
              <div>
                <div className="font-bold text-coffee-900 text-base">
                  {t.item}
                </div>
                <div className="text-xs text-tea-300 flex items-center gap-1">
                  {t.date.split("T")[0]} · {t.payer}
                </div>
              </div>
            </div>
            <div
              className={`font-mono font-bold text-lg tracking-tight ${
                t.type === "deposit" ? "text-green-600" : "text-coffee-800"
              }`}
            >
              {t.type === "deposit" ? "+" : "-"}{" "}
              {Number(t.amount).toLocaleString()}
            </div>
          </div>
        ))}
        {transactions.length === 0 && (
          <div className="text-center text-tea-300 mt-10 flex flex-col items-center gap-2">
            <Wallet size={40} className="opacity-30" />
            尚無紀錄
          </div>
        )}
      </div>

      {/* FAB */}
      {user.role === "admin" && (
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="fixed bottom-24 right-5 bg-sage-600 text-white p-4 rounded-full shadow-lg shadow-sage-600/30 hover:bg-sage-700 hover:scale-105 active:scale-95 z-40 transition-all"
        >
          <Plus size={28} />
        </button>
      )}

      {/* Add Modal */}
      {isAddModalOpen && (
        <div
          className="fixed inset-0 bg-coffee-900/40 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsAddModalOpen(false)}
        >
          <div
            className="bg-[#FDFCF8] w-full max-w-sm rounded-[2rem] p-6 shadow-2xl border border-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-coffee-800">記一筆</h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="w-9 h-9 rounded-full bg-milk-100 flex items-center justify-center text-coffee-500 hover:bg-milk-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex bg-milk-100 p-1.5 rounded-2xl mb-6 relative">
              <div
                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-xl shadow-sm transition-all duration-300 ease-out border border-sage-100 ${
                  type === "deposit"
                    ? "translate-x-[100%] ml-1.5"
                    : "translate-x-0"
                }`}
              ></div>
              <button
                onClick={() => setType("expense")}
                className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all relative z-10 ${
                  type === "expense" ? "text-coffee-800" : "text-tea-400"
                }`}
              >
                支出 (Expense)
              </button>
              <button
                onClick={() => setType("deposit")}
                className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all relative z-10 ${
                  type === "deposit" ? "text-green-600" : "text-tea-400"
                }`}
              >
                存入 (Deposit)
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center mb-6">
                <label className="text-xs font-bold text-sage-400 uppercase tracking-widest block mb-2">
                  Amount
                </label>
                <div className="relative inline-block w-full">
                  <span
                    className={`absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold ${
                      type === "deposit" ? "text-green-500" : "text-coffee-800"
                    }`}
                  >
                    ¥
                  </span>
                  <input
                    type="number"
                    placeholder="0"
                    required
                    autoFocus
                    className={`w-full bg-transparent text-center text-5xl font-extrabold outline-none placeholder-milk-300 font-mono py-2 ${
                      type === "deposit" ? "text-green-600" : "text-coffee-800"
                    }`}
                    value={formData.amount}
                    onChange={(e) =>
                      setFormData({ ...formData, amount: e.target.value })
                    }
                  />
                </div>
                <div className="h-[2px] w-20 bg-milk-200 mx-auto mt-2 rounded-full"></div>
              </div>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder={
                    type === "expense" ? "例如：晚餐、計程車" : "例如：爸爸存入"
                  }
                  required
                  className="w-full p-4 bg-white border border-milk-200 rounded-2xl outline-none focus:ring-2 focus:ring-sage-200 focus:border-sage-300 text-coffee-800 placeholder-tea-300 transition-all shadow-sm font-bold"
                  value={formData.item}
                  onChange={(e) =>
                    setFormData({ ...formData, item: e.target.value })
                  }
                />
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="付款人 (預設公費)"
                    className="flex-1 p-4 bg-white border border-milk-200 rounded-2xl outline-none focus:ring-2 focus:ring-sage-200 focus:border-sage-300 text-coffee-800 placeholder-tea-300 transition-all shadow-sm"
                    value={formData.payer}
                    onChange={(e) =>
                      setFormData({ ...formData, payer: e.target.value })
                    }
                  />
                  <label
                    className={`flex items-center justify-center w-16 rounded-2xl border cursor-pointer transition-all shadow-sm ${
                      formData.photo
                        ? "bg-sage-500 border-sage-500 text-white"
                        : "bg-white border-milk-200 text-tea-300 hover:bg-sage-50 hover:text-sage-500 hover:border-sage-200"
                    }`}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                    {isUploading ? (
                      <span className="text-[10px]">...</span>
                    ) : (
                      <Camera size={24} />
                    )}
                  </label>
                </div>
                {formData.photo && (
                  <div className="relative w-full h-32 rounded-2xl overflow-hidden border border-sage-200 shadow-sm">
                    <img
                      src={formData.photo}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, photo: null })}
                      className="absolute top-2 right-2 bg-black/50 text-white p-1.5 rounded-full backdrop-blur-sm"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                <input
                  type="text"
                  placeholder="備註..."
                  className="w-full p-4 bg-white border border-milk-200 rounded-2xl outline-none focus:ring-2 focus:ring-sage-200 focus:border-sage-300 text-coffee-800 placeholder-tea-300 transition-all text-sm shadow-sm"
                  value={formData.note}
                  onChange={(e) =>
                    setFormData({ ...formData, note: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                disabled={isUploading}
                className="w-full bg-sage-600 text-white py-4 rounded-2xl font-bold text-lg mt-4 shadow-lg shadow-sage-600/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 hover:bg-sage-700"
              >
                {isUploading ? "處理中..." : "確認記帳"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-coffee-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-[#FDFCF8] w-full max-w-sm rounded-[2rem] overflow-hidden shadow-2xl flex flex-col max-h-[85vh] border border-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-shrink-0">
              {selectedItem.photo ? (
                <div className="w-full h-64 bg-milk-100 flex items-center justify-center relative">
                  <img
                    src={selectedItem.photo}
                    alt="Receipt"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent h-20"></div>
                </div>
              ) : (
                <div className="h-32 bg-sage-50/50 flex items-center justify-center text-sage-200">
                  <FileText size={48} />
                </div>
              )}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-md transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 overflow-y-auto">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-coffee-900 mb-2">
                  {selectedItem.item}
                </h3>
                <div
                  className={`text-3xl font-mono font-bold tracking-tight ${
                    selectedItem.type === "deposit"
                      ? "text-green-600"
                      : "text-coffee-800"
                  }`}
                >
                  ¥{Number(selectedItem.amount).toLocaleString()}
                </div>
                <div
                  className={`mt-2 inline-block px-3 py-1 rounded-full text-xs font-bold ${
                    selectedItem.type === "deposit"
                      ? "bg-green-100 text-green-700"
                      : "bg-sage-100 text-sage-700"
                  }`}
                >
                  {selectedItem.type === "deposit" ? "Deposit" : "Expense"}
                </div>
              </div>

              <div className="space-y-4 text-sm text-coffee-700 bg-white p-4 rounded-2xl border border-milk-100 shadow-sm">
                <div className="flex justify-between border-b border-milk-50 pb-2">
                  <span className="text-tea-400 font-bold">Time</span>
                  <span>
                    {new Date(selectedItem.date).toLocaleDateString()}{" "}
                    {new Date(selectedItem.date).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <div className="flex justify-between border-b border-milk-50 pb-2">
                  <span className="text-tea-400 font-bold">Payer</span>
                  <span>{selectedItem.payer}</span>
                </div>
                {selectedItem.note && (
                  <div className="pt-1">
                    <span className="text-tea-400 font-bold block mb-1">
                      Note
                    </span>
                    <p className="text-coffee-600 leading-relaxed bg-milk-50 p-2.5 rounded-xl border border-milk-100">
                      {selectedItem.note}
                    </p>
                  </div>
                )}
              </div>

              {user.role === "admin" && (
                <button
                  onClick={() => handleDelete(selectedItem.id)}
                  className="w-full mt-6 text-red-400 py-3 rounded-xl font-bold hover:bg-red-50 hover:text-red-500 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <Trash2 size={16} /> Delete Transaction
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Expenses;
