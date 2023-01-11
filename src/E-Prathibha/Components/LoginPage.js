import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const { email, password } = login;
  const navigate = useNavigate();

  const submitLogin = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Please enter your Email address!");
      return false;
    }
    if (password === "") {
      alert("Please enter your Password!");
      return false;
    }
    await axios
      .post("http://test.e-prathibha.com/apis/login", login)
      .then((res) => {
        // console.log(res);
        if (res.data.status === 200) {
          localStorage.setItem("Id", res.data.data.Id);
          localStorage.setItem("Token", res.data.data.Token);
          navigate("/typesofexams");
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const changeLogin = (e) => {
    setLogin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <center>
        <div className="wholefile">
          <h2>Login into your Account</h2>
          <form onSubmit={submitLogin} className="loginform">
            Email:{" "}
            <input
              type={"email"}
              name="email"
              value={email}
              onChange={changeLogin}
            />
            <br />
            <br />
            Password:{" "}
            <input
              type={"password"}
              name="password"
              value={password}
              onChange={changeLogin}
            />
            <br />
            <br />
            <button className="loginbtn">Login</button>
          </form>
        </div>
        <div>
          <p>
            Don't have an account? <Link to={"/signup"}>Signup</Link>{" "}
          </p>
        </div>
      </center>
    </div>
  );
};

export default LoginPage;
