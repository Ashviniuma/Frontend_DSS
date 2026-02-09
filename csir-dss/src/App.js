import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Signin from "./components/Signin";
import ModeSelect from "./components/ModeSelect";
import SearchWorkspace from "./components/SearchWorkspace";
import ResultsPage from "./components/ResultsPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/mode" element={<ModeSelect />} />
        <Route path="/workspace" element={<SearchWorkspace />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}
