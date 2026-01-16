import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!name) return;
    if (login(name, password)) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-milk-50 px-6">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm border border-milk-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-coffee-800 mb-2">Welcome</h1>
          <p className="text-tea-400 text-sm">東北家族旅遊 App 🇯🇵</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-coffee-700 mb-2 ml-1">
              你的名字
            </label>
            <input
              type="text"
              className="w-full p-4 bg-milk-50 border border-milk-200 rounded-xl outline-none focus:ring-2 focus:ring-tea-300 focus:border-transparent text-coffee-900 placeholder-tea-200 transition-all"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="輸入名字..."
            />
          </div>
          {name.toUpperCase() === "MT" && (
            <div className="animate-fade-in-up">
              <label className="block text-sm font-bold text-coffee-700 mb-2 ml-1">
                管理員密碼
              </label>
              <input
                type="password"
                className="w-full p-4 bg-milk-50 border border-milk-200 rounded-xl outline-none focus:ring-2 focus:ring-tea-300 text-coffee-900"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-tea-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-tea-600 active:scale-95 transition-all shadow-lg shadow-tea-500/30"
          >
            出發囉！
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
