import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const FreeExams = () => {
  const [civils, setCivils] = useState([]);
  const [upsc, setUpsc] = useState([]);
  const [ncert, setNcert] = useState([]);

  const Id = localStorage.getItem("Id");
  const Token = localStorage.getItem("Token");

  useEffect(() => {
    axios
      .post(
        "http://test.e-prathibha.com/apis/test_free_exam",
        {},
        {
          headers: {
            tokenu: Token,
            Id: Id,
            server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        // console.log(res.data.data.exams);
        if (res.data.status === 200) {
          setCivils(res.data.data.exams[0]);
          setUpsc(res.data.data.exams[1]);
          setNcert(res.data.data.exams[2]);
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  });
  return (
    <div>
      <center className="wholefile">
        <div>
          <div id="backbtn">
            <button id="buttonback">
              <Link to={"/typesofexams"}>Back</Link>
            </button>
          </div>
          <div>
            <h2>
              {" "}
              Types of Free Exams <br /> Available are:{" "}
            </h2>
            <ol>
              <li>
                Old question papers UPSC Civils (Pre): Total {civils.total}
              </li>
              <li>Limited UPSC other than Civils: Total {upsc.total}</li>
              <li>Limited NCERT: Total {ncert.total}</li>
            </ol>
          </div>
          <button className="Attbtns">
            <Link to="/show-questions">Attempt Exam</Link>
          </button>
        </div>
      </center>
    </div>
  );
};

export default FreeExams;
