import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Itinerary from "./components/Itinerary";
import TodoList from "./components/TodoList";
import Expenses from "./components/Expenses";
import Coupons from "./components/Coupons";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Itinerary />} />
        <Route path="todos" element={<TodoList />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="coupons" element={<Coupons />} />
      </Route>
    </Routes>
  );
}

export default App;
