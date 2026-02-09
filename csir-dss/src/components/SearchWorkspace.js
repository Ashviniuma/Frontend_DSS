import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/csir_4pi_logo.png";

export default function SearchWorkspace() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const maxChars = 1000;

  const handleSearch = () => {
    if (!text.trim()) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Search completed (demo)");
    }, 1500);
  };

  return (
    <div className="workspace-2col">

      {/* ===== LEFT SIDEBAR ===== */}
      <div className="sidebar">
        <button className="side-link">+ New Search</button>
        <button className="side-link">History</button>
      </div>

      {/* ===== RIGHT MAIN AREA ===== */}
      <div className="main-area">

        {/* top row */}
        <div className="top-row">
          <div className="brand">
            <img src={logo} alt="CSIR Logo" className="logo-small" />
            <div>
              <h1>CSIR Fourth Paradigm Institute</h1>
              <br></br>
              <h2>Document Similarity Search</h2>
            </div>
          </div>

          <button
            className="home-btn"
            onClick={() => navigate("/mode")}
          >
            HOME
          </button>
        </div>

        {/* content */}
        <div className="content-box">
          <label className="input-label">
            Enter Research Abstract
          </label>
          <br></br>

          <textarea
            className="abstract-box"
            value={text}
            onChange={(e) =>
              setText(e.target.value.slice(0, maxChars))
            }
            placeholder="Paste or type abstract text here..."
          />

          <div className="search-row">
            <button className="search-btn" onClick={handleSearch}>
              Search
            </button>

            <span className="char-count">
              {text.length} characters
            </span>
          </div>

          {loading && (
            <div className="loading-box">
              <div className="spinner"></div>
              <p>Extracting Keywords</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
