import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function SearchWorkspace() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSearch() {
    if (!text.trim()) {
      alert("Enter abstract first");
      return;
    }
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }

  return (
    <div className="workspacePage">

      {/* Header */}
      <div className="topHeader modern">
        <div className="headerLeft">
          <img src={logo} className="logo" alt="CSIR Logo" />
          <div>
            <h2>CSIR Fourth Paradigm Institute</h2>
            <span className="tagline">Document Similarity Search</span>
          </div>
        </div>

        <button className="homeBtn modernBtn" onClick={() => navigate("/mode")}>
          HOME
        </button>
      </div>

      {/* Body */}
      <div className="workspaceBody">

        {/* Sidebar */}
        <div className="sidebar modernSide">
          <div className="sideTitle">Workspace</div>

          <div className="sideItem active">＋ New Search</div>
          <div className="sideItem">History</div>

          <div className="sideDivider"></div>

          <div className="sideHint">
            Your recent searches will appear here
          </div>
        </div>

        {/* Main */}
        <div className="mainPanel modernMain">

          <div className="editorCard">

            <h3>Enter Research Abstract</h3>

            <textarea
              className="abstractBox modernBox"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your research abstract here for similarity analysis..."
            />

            <div className="editorFooter">
              <button className="searchBtn modernBtn" onClick={handleSearch}>
                🔍 Run Similarity Search
              </button>

              <div className="charBadge">
                {text.length} characters
              </div>
            </div>

          </div>

          {loading && (
            <div className="loading modernLoad">
              <div className="spinner"></div>
              Extracting keywords & computing similarity...
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default SearchWorkspace;
