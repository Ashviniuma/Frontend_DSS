import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import logo from "./assets/csir_4pi_logo.png";

/* ---------- HEADER ---------- */

function Header({ rightButton }) {
  return (
    <div className="header">
      <div className="header-left">
        <img src={logo} alt="CSIR Logo" className="logo" />
        <h1>CSIR Fourth Paradigm Institute</h1>
      </div>
      {rightButton && <div>{rightButton}</div>}
    </div>
  );
}

/* ---------- SIGNUP (FIRST PAGE) ---------- */

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <Header />

      <h2 className="subtitle">Document Similarity Search</h2>

      <div className="form">
        <label>Username :</label>
        <input />

        <label>Password :</label>
        <input type="password" />

        <label>Confirm Password :</label>
        <input type="password" />

        <button className="pill" onClick={() => navigate("/login")}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

/* ---------- LOGIN ---------- */

function Login() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <Header />

      <h2 className="subtitle">Document Similarity Search</h2>

      <div className="form">
        <label>Username :</label>
        <input />

        <label>Password :</label>
        <input type="password" />

        <button className="dark-btn" onClick={() => navigate("/mode")}>
          Login
        </button>
      </div>
    </div>
  );
}

/* ---------- MODE SELECTION ---------- */

function ModeSelection() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <Header rightButton={<Link className="pill" to="/signup">Logout</Link>} />

      <h2 className="subtitle">Document Similarity Search</h2>

      <div className="card-row">
        <div className="card" onClick={() => navigate("/search")}>
          ArXIV<br />Online
        </div>

        <div className="card" onClick={() => navigate("/search")}>
          Local<br />Offline
        </div>
      </div>
    </div>
  );
}

/* ---------- SEARCH PAGE ---------- */

function Search() {
  const [text, setText] = React.useState("");

  return (
    <div className="layout">
      <div className="sidebar">
        <p>+ New Search</p>
        <p>History</p>
      </div>

      <div className="content">
        <Header rightButton={<Link className="pill" to="/mode">HOME</Link>} />

        <h2 className="subtitle">Document Similarity Search</h2>

        <label class="search">Enter Research Abstract</label><br></br>

        <textarea class="text-bar"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="search-row">
          <button className="pill">Search</button>
          <span class="Characters">{text.length} Characters</span>
        </div>

        <div className="loader"></div>
      </div>
    </div>
  );
}

/* ---------- ROUTER ---------- */

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mode" element={<ModeSelection />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}
