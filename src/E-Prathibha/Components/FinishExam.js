import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const FinishExams = () => {
  const examid = localStorage.getItem("examId");
  const UserId = localStorage.getItem("Id");
  const Token = localStorage.getItem("Token");
  const body = {
    examId: examid,
    qno: 100,
  };

  const finishExam = async (e) => {
    e.preventDefault();
    await axios
      .post("http://test.e-prathibha.com/apis/finishExam", body, {
        headers: {
          tokenu: Token,
          Id: UserId,
          server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
        },
      })
      .then((res) => {
        // console.log(res);
        if (res.data.status === 200) {
          alert("Exam Finished");
        } else {
          alert("Invalid Post!");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <center>
        <div className="finalizeExam">
          <h1>Finalze Exam</h1>
          <h4>Do you wish to submit and close the Exam?</h4>
          <br />
          <div className="finishresultbtns">
            <button id="finishbtn" onClick={finishExam}>
              Finish Exam
            </button>
            <button id="resultbtn">
              <Link id="resullink" to={"/results"}>
                Get Result
              </Link>
            </button>
            <button id="cancelbtn">
              <Link id="cancellink" to={"/show-questions"}>
                Cancel
              </Link>
            </button>
          </div>
        </div>
      </center>
    </div>
  );
};

export default FinishExams;
