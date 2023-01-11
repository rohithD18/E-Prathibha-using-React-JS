import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [code, setCode] = useState({
    reg_code: "",
  });
  const { reg_code } = code;
  const navigate = useNavigate();

  const submitCode = async (e) => {
    e.preventDefault();
    if (code === "") {
      alert("Please enter the code sent to your mail!");
      return false;
    }
    await axios
      .post("http://test.e-prathibha.com/apis/verifyEmail", code)
      .then((res) => {
        // console.log(res)
        if (res.data.status === 200) {
          navigate("/");
        } else {
          console.log(res.data.data);
        }
      })
      .catch((err) => console.log("Error", err));
  };

  const saveEmailCode = (e) => {
    setCode((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <center className="wholefile">
        <div className="otpform">
          <h2>Verify your Email!</h2>
          <form onSubmit={submitCode}>
            <input
              type={"text"}
              name="reg_code"
              value={reg_code}
              onChange={saveEmailCode}
            />
            <br />
            <br />
            <button id="cancelbtn">
              <Link to={"/signup"}>Cancel</Link>{" "}
            </button>
            &nbsp;&nbsp;
            <button type="submit" id="verifybtn">
              Verify Code
            </button>
          </form>
        </div>
      </center>
    </div>
  );
};

export default VerifyEmail;
