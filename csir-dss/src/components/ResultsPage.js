import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/csir_4pi_logo.png";

/* constant papers */
const DEMO_PAPERS = [
  { title: "Neural Document Similarity Models", url: "https://arxiv.org/abs/2106.12345" },
  { title: "Semantic Text Matching Using Transformers", url: "https://arxiv.org/abs/2104.09876" },
  { title: "Embedding Based Research Retrieval", url: "https://arxiv.org/abs/2009.11111" },
  { title: "Large Scale Paper Similarity Search", url: "https://arxiv.org/abs/2201.22222" },
  { title: "Deep Learning for Scientific Ranking", url: "https://arxiv.org/abs/1908.33333" }
];

export default function ResultsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [stage, setStage] = useState("extracting");
  const [keywords, setKeywords] = useState([]);
  const [papers, setPapers] = useState([]);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const [historyList, setHistoryList] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  /* ================= LOAD HISTORY ================= */

  useEffect(() => {
    const hist = JSON.parse(localStorage.getItem("searchHistory") || "[]");
    setHistoryList(hist);
  }, []);

  /* ================= SAVE CURRENT SEARCH ================= */

  useEffect(() => {
    const query = location.state?.abstractText;

    if (query) {
      const hist = JSON.parse(localStorage.getItem("searchHistory") || "[]");

      hist.unshift({
        text: query,
        time: new Date().toLocaleString()
      });

      const trimmed = hist.slice(0, 20);

      localStorage.setItem("searchHistory", JSON.stringify(trimmed));
      setHistoryList(trimmed);
    }
  }, [location.state]);

  /* ================= SIMULATED SEARCH ================= */

  useEffect(() => {
    setStage("extracting");
    setKeywords([]);
    setPapers([]);

    const t1 = setTimeout(() => {
      setKeywords(["NLP", "Embeddings", "Similarity"]);
      setStage("searching");
    }, 1200);

    const t2 = setTimeout(() => {
      setStage("results");

      DEMO_PAPERS.forEach((p, i) => {
        setTimeout(() => {
          setPapers(prev => [...prev, p]);
        }, i * 500);
      });

    }, 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [location.key]); // rerun if navigated again

  /* ================= CLICK HISTORY ITEM ================= */

  const runHistorySearch = (item) => {
    navigate("/results", {
      state: { abstractText: item.text }
    });
    setShowHistory(false);
  };

  /* ================= UI ================= */

  return (
    <div className="workspace-2col">

      {/* ============ SIDEBAR ============ */}

      <div className="sidebar">

        <button
          className="side-link"
          onClick={() => navigate("/workspace")}
        >
          + New Search
        </button>

        <button
          className="side-link"
          onClick={() => setShowHistory(v => !v)}
        >
          History
        </button>

        {showHistory && (
          <div className="history-box">
            {historyList.length === 0 && (
              <div className="history-empty">No searches yet</div>
            )}

            {historyList.map((h, i) => (
              <div
                key={i}
                className="history-item"
                onClick={() => runHistorySearch(h)}
              >
                <div className="history-text">
                  {h.text.slice(0, 60)}...
                </div>
                <div className="history-time">
                  {h.time}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* ============ MAIN AREA ============ */}

      <div className="main-area">

        {/* HEADER */}
        <div className="top-row">
          <div className="brand">
            <img
              src={logo}
              alt="CSIR Fourth Paradigm Institute Logo"
              className="logo-small"
            />
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

        {/* RESULTS */}
        <div className="results-section">

          {stage === "extracting" && (
            <>
              <div className="spinner"></div>
              <p>Extracting Keywords...</p>
            </>
          )}

          {keywords.length > 0 && (
            <p className="keyword-line">
              Keywords: {keywords.join(", ")}
            </p>
          )}

          {stage === "searching" && (
            <>
              <div className="spinner"></div>
              <p>Searching Papers...</p>
            </>
          )}

          {papers.length > 0 && (
            <>
              <button
                className="search-btn"
                onClick={() => setShowAnalysis(true)}
              >
                Comparative Analysis
              </button>

              {papers.map((p, i) => (
                <div key={i} className="paper-card">
                  <div className="paper-title">{p.title}</div>

                  <button
                    className="paper-view-btn"
                    onClick={() => window.open(p.url, "_blank")}
                  >
                    View Paper
                  </button>
                </div>
              ))}
            </>
          )}

        </div>
      </div>

      {/* ============ ANALYSIS MODAL ============ */}

      {showAnalysis && (
        <div className="modal-overlay">
          <div className="modal-box">

            <h3>Comparative Analysis</h3>

            <p>
              • Transformer models dominate results<br/>
              • Embedding similarity is common approach<br/>
              • Ranking strategies differ<br/>
              • Retrieval efficiency varies<br/><br/>
              Overall similarity cluster score: HIGH
            </p>

            <button
              className="home-btn"
              onClick={() => setShowAnalysis(false)}
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
