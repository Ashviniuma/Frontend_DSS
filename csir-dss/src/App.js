import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import ModeSelect from "./components/ModeSelect";
import SearchWorkspace from "./components/SearchWorkspace";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mode" element={<ModeSelect />} />
        <Route path="/search" element={<SearchWorkspace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
