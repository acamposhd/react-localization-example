import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import LanguageComponent from "./components/LaguageComponent";
import OtherComponent from "./components/OtherComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LanguageComponent />} />
      <Route path="other" element={<OtherComponent />} />
    </Routes>
  );
}

export default App;
