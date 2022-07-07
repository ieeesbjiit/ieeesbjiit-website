import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Events from "./pages/Events";
import Index from "./pages/Index";
import NotFound404 from "./pages/NotFound404";
import Team from "./pages/Team";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="events" element={<Events />} />
        <Route path="team" element={<Team />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
