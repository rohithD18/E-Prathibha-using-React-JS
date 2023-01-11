import React from "react";
import "../Styling.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./Components/SignupPage";
import LoginPage from "./Components/LoginPage";
import VerifyEmail from "./Components/VerifyEmail";
import TypeOfExams from "./Components/TypeOfExams";
import FreeExams from "./Components/FreeExams";
import PremiumExams from "./Components/PremiumExams";
import ShowQuestion from "./Components/ShowQuestion";
import FinishExam from "./Components/FinishExam";
import Result from "./Components/Result";
import MyGraph from "./Components/MyGraph";
import PaymentGateway from "./Components/PaymentGateway";

const App = () => {
  return (
    <div>
      <center>
        <div>
          <BrowserRouter>
            {/* <Link to={"/signup"}>Signup</Link> */}
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/verifyEmail" element={<VerifyEmail />} />
              <Route path="/typesofexams" element={<TypeOfExams />} />
              <Route path="/free-exams" element={<FreeExams />} />
              <Route path="/premium-exams" element={<PremiumExams />} />
              <Route path="/show-questions" element={<ShowQuestion />} />
              <Route path="/finishexam" element={<FinishExam />} />
              <Route path="/results" element={<Result />} />
              <Route path="/graph" element={<MyGraph />} />
              <Route path="/payment" element={<PaymentGateway />} />
            </Routes>
          </BrowserRouter>
        </div>
      </center>
    </div>
  );
};

export default App;
