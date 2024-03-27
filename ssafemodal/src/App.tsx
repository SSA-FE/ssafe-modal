import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MySpace from "./pages/myspace/MySpace";
import { NicknameProvider } from "./contexts/NicknameContext";

function App() {
  return (
    <NicknameProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mySpace" element={<MySpace />} />
        </Routes>
      </BrowserRouter>
    </NicknameProvider>
  );
}

export default App;
