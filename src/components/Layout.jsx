import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  Calendar,
  CheckSquare,
  DollarSign,
  LogOut,
  AlertTriangle,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Layout = () => {
  const { logout } = useAuth();

  // 🟢 控制登出確認視窗的開關
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setIsLogoutModalOpen(true);
  };

  const confirmLogout = () => {
    setIsLogoutModalOpen(false);
    logout();
  };

  // 導航按鈕樣式
  const navClass = ({ isActive }) =>
    `flex flex-col items-center justify-center w-full h-full text-xs transition-all duration-300
     ${
       isActive
         ? "text-sage-600 font-bold scale-105"
         : "text-tea-300 hover:text-sage-500"
     }`;

  return (
    <div className="flex flex-col min-h-screen font-sans text-coffee-900 bg-milk-50">
      {/* 內容顯示區 */}
      <div className="flex-1 overflow-y-auto no-scrollbar md:pl-0">
        <Outlet />
      </div>

      {/* 底部導航列 */}
      <nav className="fixed bottom-0 w-full bg-white/95 backdrop-blur-md border-t border-milk-200 h-16 flex justify-around items-center z-40 pb-safe shadow-[0_-4px_15px_rgba(0,0,0,0.03)]">
        <NavLink to="/" className={navClass}>
          <Calendar size={22} className="mb-1" />
          <span>行程</span>
        </NavLink>

        <NavLink to="/todos" className={navClass}>
          <CheckSquare size={22} className="mb-1" />
          <span>待辦</span>
        </NavLink>

        <NavLink to="/expenses" className={navClass}>
          <DollarSign size={22} className="mb-1" />
          <span>記帳</span>
        </NavLink>

        {/* 🟢 修改：點擊觸發 Modal，而不是直接登出 */}
        <button
          onClick={handleLogoutClick}
          className="flex flex-col items-center justify-center w-full h-full text-xs text-tea-300 hover:text-red-400 transition-colors"
        >
          <LogOut size={22} className="mb-1" />
          <span>登出</span>
        </button>
      </nav>

      {/* 🟢 Logout Confirmation Modal (登出確認視窗) */}
      {isLogoutModalOpen && (
        <div
          className="fixed inset-0 bg-coffee-900/60 backdrop-blur-md z-[110] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsLogoutModalOpen(false)}
        >
          <div
            className="bg-[#FDFCF8] w-full max-w-xs rounded-[2rem] p-6 shadow-2xl border border-white text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-milk-200 rounded-full flex items-center justify-center mx-auto mb-4 text-coffee-600">
              <LogOut size={32} className="ml-1" />
            </div>

            <h3 className="text-xl font-bold text-coffee-900 mb-2">
              確定要登出嗎？
            </h3>
            <p className="text-sm text-coffee-600 mb-6 leading-relaxed">
              下次使用時需要再次輸入名字
              <br />
              才能查看行程喔！
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setIsLogoutModalOpen(false)}
                className="flex-1 py-3 rounded-xl font-bold text-coffee-600 bg-milk-200 hover:bg-milk-300 transition-colors"
              >
                取消
              </button>
              <button
                onClick={confirmLogout}
                className="flex-1 py-3 rounded-xl font-bold text-white bg-coffee-800 hover:bg-coffee-900 shadow-lg shadow-coffee-800/20 transition-all active:scale-95"
              >
                登出
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
