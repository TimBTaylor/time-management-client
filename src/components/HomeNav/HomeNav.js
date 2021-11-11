import React from "react";

import "./HomeNav.css";

export const HomeNav = () => {
  return (
    <>
      <div className="h-nav">
        <div className="h-nav-logo">
          <a href="/home" className="brand-link">
            TimeBase
          </a>
        </div>
        <div className="h-nav-buttons">
          <button className="h-login">Log in</button>
          <button className="h-sign-up">Sign up</button>
        </div>
      </div>
    </>
  );
};
