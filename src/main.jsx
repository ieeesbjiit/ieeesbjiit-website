import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import About from "./pages/About";
import Index from "./pages/Index";
import { NotFound404 } from "./pages/NotFound404";
import Team from "./pages/Team";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
