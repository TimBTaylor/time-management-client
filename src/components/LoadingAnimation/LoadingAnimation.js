import React from "react";
import "./LoadingAnimation.css";

export const LoadingAnimation = () => {
  return (
    <div className="animation-container">
      <h1 className="animation-text">This will be quick</h1>
      <div className="clock">
        <div className="minutes"></div>
        <div className="hours"></div>
      </div>
    </div>
  );
};
