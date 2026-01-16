import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("familyAppUser");
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false);
  }, []);

  const login = (name, password = "") => {
    let role = "user";
    // 🔴 如果需要修改密碼，請改這裡
    if (name.toUpperCase() === "MT") {
      if (password === "snorlax") {
        role = "admin";
      } else {
        alert("密碼錯誤");
        return false;
      }
    }
    const userData = { name, role };
    setUser(userData);
    localStorage.setItem("familyAppUser", JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("familyAppUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
