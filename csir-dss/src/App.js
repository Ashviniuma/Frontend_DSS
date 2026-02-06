import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Signin from "./components/Signin";
import ModeSelect from "./components/ModeSelect";
import SearchWorkspace from "./components/SearchWorkspace";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/mode" element={<ModeSelect />} />
        <Route path="/workspace" element={<SearchWorkspace />} />
      </Routes>
    </Router>
  );
}
