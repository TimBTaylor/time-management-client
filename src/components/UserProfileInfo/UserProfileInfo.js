import React from "react";
import { useSelector } from "react-redux";

import "./UserProfileInfo.css";

export const UserProfileInfo = () => {
  const first = useSelector((state) => state.userInfoReducer.firstName);
  const last = useSelector((state) => state.userInfoReducer.lastName);
  const companyName = useSelector((state) => state.userInfoReducer.companyName);
  const companyNumber = useSelector(
    (state) => state.userInfoReducer.companyNumber
  );
  const isAdmin = useSelector((state) => state.userInfoReducer.isAdmin);

  return (
    <div className="user-profile-info-container">
      <h1>
        {first} {last}{" "}
      </h1>
      <h3>{companyName}</h3>
      {isAdmin ? <h3>{companyNumber}</h3> : ""}
    </div>
  );
};
