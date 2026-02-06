import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/csir_4pi_logo.png";

export default function ModeSelect() {
  const navigate = useNavigate();

  const handleSelect = (mode) => {
    navigate("/workspace", { state: { mode } });
  };

  return (
    <div className="page">
      <img src={logo} alt="CSIR Logo" className="logo-img" />

      <h1>Document Similarity Platform</h1>
      <p className="subtitle">Choose your search mode</p>

      <div className="card mode-card">
        <div className="mode-grid">

          <button
            className="mode-box"
            onClick={() => handleSelect("arxiv")}
          >
            <h3>ArXiv Online</h3>
            <p>Search and compare with online research papers</p>
          </button>

          <button
            className="mode-box"
            onClick={() => handleSelect("local")}
          >
            <h3>Local Offline</h3>
            <p>Compare with locally uploaded documents</p>
          </button>

        </div>

        <p className="switch">
          <Link to="/">← Back to Login</Link>
        </p>
      </div>
    </div>
  );
}
