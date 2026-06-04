import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
        <Route
         path="/*"
         element={
         <ProtectedRoute>
           <Home />
         </ProtectedRoute>
         }
         />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
