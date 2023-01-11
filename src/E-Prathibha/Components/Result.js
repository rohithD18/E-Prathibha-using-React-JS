import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Result = () => {
  const [results, setResults] = useState({
    obtained_marks: "",
    percent: "",
    result: "",
    total_answered: "",
    total_marks: "",
    passing_percent: "",
    name: "",
  });
  const {
    obtained_marks,
    percent,
    result,
    total_answered,
    total_marks,
    passing_percent,
    name,
  } = results;

  const UserId = localStorage.getItem("Id");
  const Token = localStorage.getItem("Token");
  const resultId = localStorage.getItem("exam_result_id");

  const body = {
    id: resultId,
  };
  useEffect( () => {
    axios
      .post("http://test.e-prathibha.com/apis/exam_result", body, {
        headers: {
          tokenu: Token,
          Id: UserId,
          server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
        },
      })
      .then((res) => {
        // console.log(res.data.data);
        setResults({
          name: res.data.data.examDetails.Exam.name,
          myTime: res.data.data.examDetails.Result.myTime,
          obtained_marks: res.data.data.examDetails.Result.obtained_marks,
          percent: res.data.data.examDetails.Result.percent,
          result: res.data.data.examDetails.Result.result,
          total_answered: res.data.data.examDetails.Result.total_answered,
          total_marks: res.data.data.examDetails.Result.total_marks,
          passing_percent: res.data.data.examDetails.Exam.passing_percent,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <> 
      <center className="resultsPage">
        <div>
          <table>
            <thead>
              <tr>
                <th>
                  Exam Name: <span>{name}</span>
                </th>
                <th id="tm">
                  Total Marks: <span>{total_marks}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Total answered </th>
                <td> {total_answered}</td>
              </tr>
              <tr>
                <th>Obtained Marks</th>
                <td> {obtained_marks}</td>
              </tr>
              <tr>
                <th>Passing percent</th>
                <td> {passing_percent}</td>
              </tr>
              <tr>
                <th>Percentage</th>
                <td> {percent}</td>
              </tr>
              <tr>
                <th>Result</th>
                <td> {result}</td>
              </tr>
            </tbody>
          </table>
          <button id="retakebtn">
            <Link to="/show-questions">Retake Exam</Link>
          </button>{" "}
          &nbsp;
          <button id="graphbtn">
            <Link id="graph" to={"/graph"}>
              Get Graph
            </Link>
          </button>
        </div>
      </center>
    </>
  );
};

export default Result;
