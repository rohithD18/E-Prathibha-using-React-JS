import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [register, setRegister] = useState({
    email: "",
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const { email, name, phone, password, confirmPassword } = register;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Please enter your Email address!");
      return false;
    }
    if (name === "") {
      alert("Please enter your Name!");
      return false;
    }
    if (phone === "") {
      alert("Please enter your Phone number!");
      return false;
    }
    if (password === "") {
      alert("Please enter your Password!");
      return false;
    }
    await axios
      .post("http://test.e-prathibha.com/apis/register", register)
      .then((res) => {
        if (res.data.status === 200) {
          navigate("/verifyEmail");
          console.log("Success", res.data);
        }
      })
      .catch((err) => {
        console.error("Error", err);
      });
  };

  const handleChange = (e) => {
    setRegister((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <center>
        <div className="wholefile">
          <div>
            <h2>Create</h2>
            <h1>Account</h1>
          </div>
          <form onSubmit={handleSubmit} className="signupform">
            Email:
            <input
              type={"email"}
              name="email"
              value={email}
              onChange={handleChange}
            />
            <br />
            <br />
            Name:
            <input
              type={"text"}
              name="name"
              value={name}
              onChange={handleChange}
            />
            <br />
            <br />
            Phone:
            <input
              type={"number"}
              name="phone"
              value={phone}
              onChange={handleChange}
            />
            <br />
            <br />
            Password:
            <input
              type={"password"}
              name="password"
              value={password}
              onChange={handleChange}
            />
            <br />
            <br />
            Confirm Password:
            <input
              type={"password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
            />
            <br />
            <br />
            <button className="signupbtn">Signup</button>
          </form>
        </div>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </center>
    </div>
  );
};

export default SignupPage;
