import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCompany } from "../../redux/actions/createCompany";
import { addCompany } from "../../redux/actions/addCompany";
import { useNavigate } from "react-router";

import "./NewCompany.css";

export const NewCompany = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [invalidCompanyName, setInvalidCompanyName] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [companyCode] = useState(Math.floor(100000 + Math.random() * 900000));

  const firstName = useSelector((state) => state.userInfoReducer.firstName);
  const profileImage = useSelector((state) => state.userInfoReducer.image);
  const email = useSelector((state) => state.userInfoReducer.email);
  const isAdmin = useSelector((state) => state.userInfoReducer.isAdmin);

  const companyCreated = useSelector(
    (state) => state.errorsReducer.companyCreated
  );

  const handleCreateCompany = () => {
    let tableName = isAdmin ? "Admins" : "Employees";
    const companyInfo = {
      companyName,
      email,
      companyNumber: companyCode,
      tableName,
    };

    const updateCompanyNumber = {
      email,
      companyNumber: companyCode,
      tableName,
    };
    if (companyName.length >= 2) {
      dispatch(createCompany(companyInfo));
      dispatch(addCompany(updateCompanyNumber));
      navigate("/employee/home");
    } else {
      setInvalidCompanyName(true);
    }
  };

  return (
    <div className="new-company-container">
      <img src={profileImage} alt="users img" />
      <h1>
        Hello <span className="nc-name">{firstName}</span>,{" "}
        <span>lets get you setup</span>
      </h1>
      {companyCreated ? "" : <p>! Something went wrong, try again</p>}
      <div>
        {invalidCompanyName ? (
          <p>Company name must be atleast 2 characters</p>
        ) : (
          ""
        )}
        <label htmlFor="company-name" className="company-input">
          Company Name *
        </label>
        <input
          type="text"
          name="company-name"
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder={email} disabled={true} />
        <label htmlFor="company-code">Company Code</label>
        <input
          type="text"
          name="company-code"
          placeholder={companyCode}
          disabled={true}
        />
      </div>
      <button type="submit" onClick={handleCreateCompany}>
        Create company
      </button>
    </div>
  );
};
