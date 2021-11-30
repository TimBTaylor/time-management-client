import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { addCompany } from "../../redux/actions/addCompany";
import { useSelector, useDispatch } from "react-redux";

import "./CompanyNumber.css";

export const CompanyNumber = () => {
  const [companyNumber] = useState([]);
  const email = useSelector((state) => state.userInfoReducer.email);
  const invalidCode = useSelector((state) => state.errorsReducer.invalidCode);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const fifthInput = useRef(null);
  const sixthInput = useRef(null);

  const nextInput = (e, pos, prev, next) => {
    if (e.target.value.length === 1) {
      companyNumber.splice(pos, 0, e.target.value);
      next.current.focus();
    } else {
      companyNumber.splice(pos, 1);
      prev.current.focus();
    }
  };

  const companyChange = () => {
    if (companyNumber.length === 6) {
      const userInfo = {
        email,
        companyNumber: companyNumber.join(""),
        tableName: "Employees",
      };
      dispatch(addCompany(userInfo));
      navigate("/employee/home");
    }
  };

  return (
    <div className="company-number">
      <h1>Enter your company's 6 digit code</h1>
      <p>You can recieve this code from your employer</p>
      {invalidCode ? <p className="invalid-code">! Invalid code</p> : ""}
      <div className="digits">
        <input
          disabled={false}
          type="text"
          maxLength="1"
          ref={firstInput}
          onChange={(e) => nextInput(e, 0, firstInput, secondInput)}
        />
        -
        <input
          type="text"
          maxLength="1"
          ref={secondInput}
          onChange={(e) => nextInput(e, 1, firstInput, thirdInput)}
        />
        -
        <input
          type="text"
          maxLength="1"
          ref={thirdInput}
          onChange={(e) => nextInput(e, 2, secondInput, fourthInput)}
        />
        -
        <input
          type="text"
          maxLength="1"
          ref={fourthInput}
          onChange={(e) => nextInput(e, 3, thirdInput, fifthInput)}
        />
        -
        <input
          type="text"
          maxLength="1"
          ref={fifthInput}
          onChange={(e) => nextInput(e, 4, fourthInput, sixthInput)}
        />
        -
        <input
          type="text"
          maxLength="1"
          ref={sixthInput}
          onChange={(e) => nextInput(e, 5, fifthInput, sixthInput)}
        />
      </div>
      <button onClick={companyChange}>Submit</button>
    </div>
  );
};
