import "../assets/css/Form.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const navigate = useNavigate();

  const signUp = () => {
    const registerData = { firstName, lastName, email, password };
    console.warn(registerData);
    fetch("http://localhost:8085/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerData),
    }).then(() => {
      console.log("New user added");
      navigate("/login");
    });
  };

  const validateForm = () => {
    let isValidated = true;
    if (firstName === "") {
      setErrorFirstName("You must enter your First Name");
      isValidated = false;
    } else {
      setErrorFirstName("");
    }

    if (lastName === "") {
      setErrorLastName("You must enter your Last Name");
      isValidated = false;
    } else {
      setErrorLastName("");
    }

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
            <h2 className="title"> Create a new account</h2>
          </div>
          <form className="form-wrapper">
            <div className="name">
              <label className="label">First Name</label>
              <input
                className="input"
                type="text"
                name="firstName"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
              <span className="error">{errorFirstName}</span>
            </div>
            <div className="name">
              <label className="label">Last Name</label>
              <input
                className="input"
                type="text"
                name="lastName"
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
              <span className="error">{errorLastName}</span>
            </div>
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
                type="password"
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
                onClick={(e) => {
                  e.preventDefault();
                  if (validateForm()) {
                    signUp();
                  } else {
                    alert("There are errors: Please fill all the fields");
                  }
                }}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationPage;
