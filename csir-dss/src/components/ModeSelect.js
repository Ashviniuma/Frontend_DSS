import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function ModeSelect() {
  const navigate = useNavigate();

  function handleClick(mode) {
    navigate("/search");
  }

  return (
    <div className="page">
      <div className="card">

        <div className="header">
          <img src={logo} alt="CSIR Logo" className="logo" />
          <h2>CSIR Fourth Paradigm Institute</h2>
        </div>

        <h3 className="subtitle big">Document Similarity Search</h3>

        <div className="modeGrid">

          <div className="modeBox" onClick={() => handleClick("arxiv")}>
            <div className="modeTitle">ArXIV</div>
            <div className="modeSub">Online</div>
          </div>

          <div className="modeBox" onClick={() => handleClick("local")}>
            <div className="modeTitle">Local</div>
            <div className="modeSub">Offline</div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ModeSelect;
