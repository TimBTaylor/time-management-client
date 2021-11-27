import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./UserHomeInfo.css";

export const UserHomeInfo = () => {
  const [curDate, setCurDate] = useState();
  const firstName = useSelector((state) => state.userInfoReducer.firstName);
  const lastName = useSelector((state) => state.userInfoReducer.lastName);
  const profileImage = useSelector((state) => state.userInfoReducer.image);

  function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");

    setCurDate(month + "/" + day + "/" + year);
  }

  useEffect(() => {
    getFormattedDate(new Date());
  }, []);

  return (
    <div className="user-home-info-container">
      <div>
        <h1>
          {firstName} {lastName}
        </h1>
        <img src={profileImage} alt="users img" />
      </div>
      <p>{curDate}</p>
    </div>
  );
};
