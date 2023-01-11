import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PaymentGateway = () => {
  const [payments, setPayments] = useState({
    amount: "",
    display_currency: "",
    description: "",
    key: "",
    name: "",
    merchant_order_id: "",
  });
  const {
    amount,
    display_currency,
    description,
    key,
    name,
    merchant_order_id,
  } = payments;

  const Id = localStorage.getItem("Id");
  const Token = localStorage.getItem("Token");

  const body = {
    packagearr: { 8: 1 },
    packagetype: "RAZORPAY",
    year: "",
  };
  useEffect(() => {
    axios
      .post("http://test.e-prathibha.com/apis/test_paymentGateway", body, {
        headers: {
          tokenu: Token,
          Id: Id,
          server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
        },
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.status === 200) {
          setPayments({
            description: res.data.data.description,
            amount: res.data.data.amount,
            display_currency: res.data.data.display_currency,
            key: res.data.data.key,
            name: res.data.data.name,
            merchant_order_id: res.data.data.notes.merchant_order_id,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <center>
        <div>
          <br />
          <table>
            <thead>
              <tr>
                <th colSpan={2}>
                  Payment Gateway: <span>RAZORPAY </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Amount</th>
                <td>
                  {" "}
                  <span>
                    {amount} {display_currency}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Key </th>
                <td> {key}</td>
              </tr>
              <tr>
                <th>Marchant Order Id</th>
                <td> {merchant_order_id}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td> {name}</td>
              </tr>
              <tr>
                <th>Description</th>
                <td>{description}</td>
              </tr>
            </tbody>
          </table>
          <br />
          <Button className="btn btn-secondary">
            <Link to={"/show-questions"}>Attempt Exam</Link>{" "}
          </Button>
        </div>
      </center>
    </div>
  );
};

export default PaymentGateway;
