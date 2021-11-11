import React from "react";

import "./HomeView.css";

export const HomeView = () => {
  return (
    <div className="home-view-container">
      <h1 className="intro">
        Free <span className="intro-time">time tracking</span> for your company
      </h1>
      <p className="description">
        TimeBase is a time tracking and timesheet app that lets you track hours
        across projects. Unlimited users, always free
      </p>
      <button className="get-started">Get started now - it's free</button>
    </div>
  );
};
