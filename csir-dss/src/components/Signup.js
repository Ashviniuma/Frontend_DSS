import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Signup() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: "",
    confirm: ""
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!data.username || !data.password || !data.confirm) {
      alert("Fill all fields");
      return;
    }

    if (data.password !== data.confirm) {
      alert("Passwords do not match");
      return;
    }

    alert("Signup Successful");
    navigate("/");
  }

  return (
    <div className="page">
      <div className="card">

        <div className="header">
          <img src={logo} alt="CSIR Logo" className="logo" />
          <h2>CSIR Fourth Paradigm Institute</h2>
        </div>

        <p className="subtitle">Document Similarity Search</p>

        <form onSubmit={handleSubmit}>
          <label>Username :</label>
          <input name="username" onChange={handleChange} />

          <label>Password :</label>
          <input type="password" name="password" onChange={handleChange} />

          <label>Confirm Password :</label>
          <input type="password" name="confirm" onChange={handleChange} />

          <button className="mainBtn">Signin</button>
        </form>

      </div>
    </div>
  );
}

export default Signup;
