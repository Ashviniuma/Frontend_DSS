import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/csir_4pi_logo.png";

export default function SearchWorkspace() {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [stage, setStage] = useState("idle");
  const [keywords, setKeywords] = useState([]);
  const [papers, setPapers] = useState([]);

  const maxChars = 1000;

  const demoPapers = [
    "Paper 1",
    "Paper 2",
    "Paper 3",
    "Paper 4",
    "Paper 5"
  ];

  const handleSearch = () => {
    if (!text.trim()) return;

    setStage("extracting");
    setKeywords([]);
    setPapers([]);

    /* stage 1 — extracting */
    setTimeout(() => {
      setKeywords(["Keyword1", "Keyword2", "Keyword3"]);
      setStage("searching");
    }, 1500);

    /* stage 2 — searching */
    setTimeout(() => {
      setStage("results");

      demoPapers.forEach((p, i) => {
        setTimeout(() => {
          setPapers(prev => [...prev, p]);
        }, i * 600);
      });

    }, 3000);
  };

  return (
    <div className="workspace-2col">

      {/* LEFT SIDEBAR */}
      <div className="sidebar">
        <button className="side-link">+ New Search</button>
        <button className="side-link">History</button>
      </div>

      {/* RIGHT MAIN */}
      <div className="main-area">

        {/* TOP ROW */}
        <div className="top-row">
          <div className="brand">
            <img src={logo} alt="CSIR Logo" className="logo-small" />
            <div>
              <h1>CSIR Fourth Paradigm Institute</h1>
              <h2>Document Similarity Search</h2>
            </div>
          </div>

          <button className="home-btn" onClick={() => navigate("/mode")}>
            HOME
          </button>
        </div>

        {/* INPUT AREA */}
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
        </div>

        {/* ===== RESULTS FLOW ===== */}

        {stage !== "idle" && (
          <div className="results-section">

            <h3>Search Results</h3>

            {stage === "extracting" && (
              <>
                <div className="spinner"></div>
                <p>Extracting Keywords</p>
              </>
            )}

            {keywords.length > 0 && (
              <p className="keyword-line">
                {keywords.join(", ")} ...
              </p>
            )}

            {stage === "searching" && (
              <>
                <div className="spinner"></div>
                <p>Searching ArXiv Repository</p>
              </>
            )}

            {papers.length > 0 && (
              <>
                <h3>Top 5 Similar Papers</h3>

                {papers.map((p, i) => (
                  <div key={i} className="paper-card">
                    <div className="paper-title">{p}</div>

                    <div className="paper-action">
                      comparative analysis
                    </div>
                  </div>
                ))}
              </>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
