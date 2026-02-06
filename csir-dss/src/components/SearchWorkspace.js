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
    <div className="workspace-page">

      {/* HEADER */}
      <div className="workspace-header">
        <div className="header-left">
          <img src={logo} alt="CSIR Logo" className="logo-small" />
        </div>

        <div className="header-center">
          <h2>CSIR Fourth Paradigm Institute</h2>
          <p>Document Similarity Search</p>
        </div>

        <div className="header-right">
          <button
            className="home-btn"
            onClick={() => navigate("/mode")}
          >
            Home
          </button>
        </div>
      </div>

      {/* BODY */}
      <div className="workspace-body">

        {/* SIDEBAR */}
        <div className="workspace-sidebar">
          <button className="side-link">+ New Search</button>
          <button className="side-link">History</button>
        </div>

        {/* MAIN */}
        <div className="workspace-main">
          <label className="input-label">
            Enter Research Abstract
          </label>

          <textarea
            className="abstract-box"
            value={text}
            onChange={(e) =>
              setText(e.target.value.slice(0, maxChars))
            }
            placeholder="Paste or type abstract text here..."
          />

          <div className="search-row">
            <button
              className="search-btn"
              onClick={handleSearch}
            >
              Search
            </button>

            <span className="char-count">
              {text.length} characters
            </span>
          </div>

          {loading && (
            <div className="loading-box">
              <div className="spinner"></div>
              <p>Analyzing document...</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
