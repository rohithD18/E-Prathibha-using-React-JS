import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const TypeOfExams = () => {
  return (
    <div>
      <center className="wholefile">
      <div id="backbtn">
            <button id="buttonback">
              <Link id="back" to={"/"}>
                Logout
              </Link>
            </button>
          </div>
        <div className="typeofexamspage">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>FREE EXAMS</Card.Title>
              <Card.Text>
                Here are some free online exams to practice and score high
                marks.
                <br />
                Click below button to get free exams.
              </Card.Text>
              <Button variant="warning">
                <Link id="freeexamlink" to={"/free-exams"}>
                  Fee Exams
                </Link>
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>PREMIUM EXAMS</Card.Title>
              <Card.Text>
                Here are Premium online exams to practice and score high marks.
                <br />
                Click below button to get Premium exams.
              </Card.Text>
              <Button variant="danger">
                <Link id="premiumexamlink" to={"/premium-exams"}>
                  Premium Exams
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </center>
    </div>
  );
};

export default TypeOfExams;
