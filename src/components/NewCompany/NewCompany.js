import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./NewCompany.css";

export const NewCompany = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyCode] = useState(Math.floor(100000 + Math.random() * 900000));

  const firstName = useSelector((state) => state.userInfoReducer.firstName);
  const profileImage = useSelector((state) => state.userInfoReducer.image);
  const email = useSelector((state) => state.userInfoReducer.email);

  console.log(companyName);
  return (
    <div className="new-company-container">
      <img src={profileImage} alt="users img" />
      <h1>
        Hello <span className="nc-name">{firstName}</span>,{" "}
        <span>lets get you setup</span>
      </h1>
      <div>
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
      <button>Create company</button>
    </div>
  );
};
