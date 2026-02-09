import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/csir_4pi_logo.png";

export default function SearchWorkspace() {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [showHistory, setShowHistory] = useState(false);

  const maxChars = 1000;

  const getHistory = () => {
    return JSON.parse(localStorage.getItem("searchHistory") || "[]");
  };

  const handleSearch = () => {
    if (!text.trim()) return;

    const history = getHistory();
    history.unshift({
      text,
      time: new Date().toLocaleString()
    });

    localStorage.setItem(
      "searchHistory",
      JSON.stringify(history.slice(0, 20))
    );

    navigate("/results", {
      state: { abstractText: text }
    });
  };

  const history = getHistory();

  return (
    <div className="workspace-2col">

      {/* SIDEBAR */}
      <div className="sidebar">
        <button
          className="side-link"
          onClick={() => {
            setText("");
            setShowHistory(false);
          }}
        >
          + New Search
        </button>

        <button
          className="side-link"
          onClick={() => setShowHistory(!showHistory)}
        >
          History
        </button>

        {showHistory && (
          <div className="history-list">
            {history.length === 0 && (
              <p>No searches yet</p>
            )}

            {history.map((h, i) => (
              <div
                key={i}
                className="history-item"
                onClick={() => {
                  setText(h.text);
                  setShowHistory(false);
                }}
              >
                {h.text.slice(0, 40)}...
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MAIN */}
      <div className="main-area">

        <div className="top-row">
          <div className="brand">
            <img src={logo} alt="CSIR Logo" className="logo-img" />
            <div>
              <h1>CSIR Fourth Paradigm Institute</h1>
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

        <div className="content-box">
          <label className="input-label">
            Enter Research Abstract
          </label>

          <textarea
            className="abstract-box"
            value={text}
            onChange={(e) =>
              setText(e.target.value.slice(0, maxChars))
            }
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
        </div>

      </div>
    </div>
  );
}
