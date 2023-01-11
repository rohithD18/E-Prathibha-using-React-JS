import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ShowQuestion = () => {
  const navigate = useNavigate();
  const [examId, setExamId] = useState({
    Id: "",
  });
  let { Id } = examId;
  const [question, setQuestion] = useState([]);

  const UserId = localStorage.getItem("Id");
  const Token = localStorage.getItem("Token");

  const getQuestion = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `http://test.e-prathibha.com/apis/start_exam?examId=${Id}`,
        {},
        {
          headers: {
            tokenu: Token,
            Id: UserId,
            server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
          },
        }
      )
      .then((res) => {
        // console.log(res.data.data.exam);
        if (res.data.status === 200) {
          setQuestion(res.data.data.exam);
          localStorage.setItem("examId", Id);
          localStorage.setItem(
            "exam_result_id",
            res.data.data.exam[0].ExamStat.exam_result_id
          );
          localStorage.setItem(
            "subject_id",
            res.data.data.exam[0].Question.subject_id
          );
          localStorage.setItem(
            "subject_name",
            res.data.data.exam[0].Question.Subject.subject_name
          );
          localStorage.setItem("ExamName", res.data.data.exam[0].Exam.name);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setExamId((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const exam_result_id = localStorage.getItem("exam_result_id");

  const submitAnswer = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://test.e-prathibha.com/apis/submit",
        {
          body: {
            examId: Id,
            examresultId: exam_result_id,
          },
        },
        {
          headers: {
            tokenu: Token,
            Id: UserId,
            server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          navigate("/finishexam");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <center>
        <div className="question">
        <div>
          <button id="buttonback">
            <Link id="back" to={"/typesofexams"}>
              Back
            </Link>
          </button>
        </div><br/>
          <form onSubmit={getQuestion}>
            <h3>Enter Exam Id</h3>
            <input type={"text"} name="Id" value={Id} onChange={handleChange} />
            <br />
            <br />
            <button>Start Test</button>
          </form>
          <br />
          {question.map((items, index) => {
            const { Question } = items;
            return (
              <div key={index}>
                <ul key={index}>
                  <li>
                    <div className="questionlabel">
                      <p>Question Id: {Question.id} </p>
                      <p>
                        Right Mark: <i id="marks">{Question.marks}</i>
                      </p>
                      <p>
                        Negative marks:
                        <i id="negative"> {Question.negative_marks}</i>{" "}
                      </p>
                    </div>
                    <br />
                  </li>
                  <li>{Question.question.above}</li>
                  <li>
                    <form onSubmit={submitAnswer}>
                      <input
                        type={"radio"}
                        id="option"
                        name="options"
                        value={Question.option1}
                      />{" "}
                      <label>{Question.option1}</label> <br />
                      <input
                        type={"radio"}
                        id="option"
                        name="options"
                        value={Question.option2}
                      />{" "}
                      <label>{Question.option2}</label> <br />
                      <input
                        type={"radio"}
                        id="option"
                        name="options"
                        value={Question.option3}
                      />{" "}
                      <label>{Question.option3}</label> <br />
                      <input
                        type={"radio"}
                        id="option"
                        name="options"
                        value={Question.option4}
                      />{" "}
                      <label>{Question.option4}</label>
                      <br /> <br />
                      <input type={"submit"} value="Submit" />
                    </form>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </center>
    </div>
  );
};

export default ShowQuestion;
