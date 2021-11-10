import React from "react";
import clockLogo from "../../Images/clock-logo.svg";

import "./HomeNav.css";

export const HomeNav = () => {
  return (
    <>
      <div className="h-nav">
        <a href="/home" className="brand-link">
          TimeBase
        </a>
        <img src={clockLogo} alt="logo" className="h-brand-logo" />
      </div>
    </>
  );
};
