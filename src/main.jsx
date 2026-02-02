import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing.jsx";
import Mode from "./pages/mode.jsx";
import Battle from "./pages/battle.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/mode" element={<Mode />} />
      <Route path="/battle" element={<Battle />} />
    </Routes>
  </BrowserRouter>
);
