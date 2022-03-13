import "../assets/css/Form.css";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const validateForm = () => {
    let isValidated = true;
    if (email === "") {
      setErrorEmail("You must enter a valid email");
      isValidated = false;
    } else {
      setErrorEmail("");
    }

    if (password === "") {
      setErrorPassword("You must enter the password");
      isValidated = false;
    } else {
      setErrorPassword("");
    }
    return isValidated;
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <div className="app-wrapper">
          <div>
            <h2 className="title"> Login</h2>
          </div>
          <form className="form-wrapper" onSubmit={handleSubmit}>
            <div className="email">
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                name="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <span className="error">{errorEmail}</span>
            </div>
            <div className="password">
              <label className="label">Enter Password</label>
              <input
                className="input"
                type="text"
                name="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <span className="error">{errorPassword}</span>
            </div>
            <div>
              <button
                className="submit"
                onClick={() => {
                  if (validateForm()) {
                    alert("Logging in");
                  } else {
                    alert("There are errors");
                  }
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
