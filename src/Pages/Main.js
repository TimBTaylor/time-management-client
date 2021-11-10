import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Home";

export const Main = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={Home()} />
        </Routes>
      </Router>
    </div>
  );
};
