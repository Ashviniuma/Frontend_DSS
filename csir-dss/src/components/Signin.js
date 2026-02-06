import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/csir_4pi_logo.png";

export default function Signin() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created (demo)");
  };

  return (
    <div className="page">
      <img src={logo} alt="CSIR Logo" className="logo-img" />

      <h1>Create Account</h1>
      <p className="subtitle">Register for Document Similarity Platform</p>

      <div className="card">
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            placeholder="Choose username"
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />

          <label>Email</label>
          <input
            placeholder="Enter email"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button>Create Account</button>
        </form>

        <p className="switch">
          Already have account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
