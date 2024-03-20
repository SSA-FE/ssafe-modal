import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseHeader from "./BaseComponents/BaseHeader";
import Home from "./pages/home/Home";
import MySpace from "./pages/myspace/MySpace";
import "./styles/global.css";
import { NicknameProvider } from "./contexts/NicknameContext";

function App() {
  return (
    <NicknameProvider>
      <BrowserRouter>
        <BaseHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mySpace" element={<MySpace />} />
        </Routes>
      </BrowserRouter>
    </NicknameProvider>
  );
}

export default App;
