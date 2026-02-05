import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: ""
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!data.username || !data.password) {
      alert("Please fill all fields");
      return;
    }
    navigate("/mode");
  }

  return (
    <div className="page">
      <div className="card">

        <div className="header">
          <img src={logo} alt="CSIR Logo" className="logo" />
          <h2>CSIR Fourth Paradigm Institute</h2>
          <button className="signupBtn" onClick={() => navigate("/signup")}>
            Signup
          </button>
        </div>

        <p className="subtitle">Document Similarity Search</p>

        <form onSubmit={handleSubmit}>
          <label>Username :</label>
          <input name="username" onChange={handleChange} />

          <label>Password :</label>
          <input type="password" name="password" onChange={handleChange} />

          <button className="mainBtn">Login</button>
        </form>

      </div>
    </div>
  );
}

export default Login;
