import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { Link } from "react-router-dom";
// import { LinearScale, CategoryScale, Chart, BarElement, Legend, Title, Tooltip } from 'chart.js';
// Chart.register(
//   LinearScale, CategoryScale,BarElement, Legend, Title, Tooltip,
// );

const MyGraph = () => {
  const [marks, setMarks] = useState([]);

  const studentId = localStorage.getItem("Id");
  const Token = localStorage.getItem("Token");
  const subjectId = localStorage.getItem("subject_id");
  const subjectName = localStorage.getItem("subject_name");
  const ExamName = localStorage.getItem("ExamName");

  const body = {
    subject: subjectId,
    studentId: studentId,
  };

  useEffect(() => {
    axios
      .post("http://test.e-prathibha.com/apis/getGraphData", body, {
        headers: {
          tokenu: Token,
          Id: studentId,
          server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
        },
      })
      .then((res) => {
        // console.log(res);
        if (res.data.status === 200) {
          setMarks(res.data.data.counts);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: subjectName,
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: ExamName,
        data: marks.map((items) => items),
        backgroundColor: "grey",
      },
    ],
  };
  return (
    <div>
      <center>
        <div className="btnback">
          <button id="buttonback">
            <Link id="back" to={"/finishexam"}>
              Back
            </Link>
          </button>
        </div>
        <div>
          <Bar options={options} data={data} />
        </div>
      </center>
    </div>
  );
};

export default MyGraph;
