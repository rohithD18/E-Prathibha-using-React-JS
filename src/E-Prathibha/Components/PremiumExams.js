import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PremiumExams = () => {
  const [old, setOld] = useState("");
  const [upsc, setUpsc] = useState("");
  const [ncert, setNcert] = useState("");

  const Id = localStorage.getItem("Id");
  const Token = localStorage.getItem("Token");

  useEffect(() => {
    axios
      .post(
        "http://test.e-prathibha.com/apis/premium_exam",
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
        setOld(res.data.data.exams[0].total);
        setUpsc(res.data.data.exams[1].total);
        setNcert(res.data.data.exams[1].total);
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
              <Link id="back" to={"/typesofexams"}>
                Back
              </Link>
            </button>
          </div>
          <h2>
            {" "}
            Types of Premium Exams <br /> Available are:{" "}
          </h2>
          <ol>
            <li>26 Years Old: Total {old}</li>
            <li>2014-2020 UPSC: Total {upsc}</li>
            <li>Comprehensive NCERT: Total {ncert}</li>
          </ol>
        </div>
        <div>
          <Button className="btn btn-warning">
            <Link id="paymentlink" to={"/payment"}>Click to Payment Gateway</Link>
          </Button>
        </div>
        <br />
      </center>
    </div>
  );
};

export default PremiumExams;
