import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { EmployeeHome } from "./EmployeeHome";
import { AdminHome } from "./AdminHome";
import { CompanyNum } from "./CompanyNum";
import { CreateCompany } from "./CreateCompany";
import { useSelector } from "react-redux";
import { LoadingAnimation } from "../components/LoadingAnimation/LoadingAnimation";

export const Main = () => {
  const isLoading = useSelector((state) => state.userInfoReducer.isLoading);
  const isAdmin = useSelector((state) => state.userInfoReducer.isAdmin);
  const companyNumber = useSelector(
    (state) => state.userInfoReducer.companyNumber
  );
  const alreadyUser = useSelector((state) => state.errorsReducer.alreadyUser);

  return (
    <div>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route
              exact
              path="/employee/home"
              element={isAdmin > 0 ? <AdminHome /> : <EmployeeHome />}
            />
            <Route
              exact
              path="/admin/home"
              element={isAdmin > 0 ? <AdminHome /> : <EmployeeHome />}
            />
            <Route
              exact
              path="/company-number"
              element={
                isAdmin ? (
                  <AdminHome />
                ) : companyNumber ? (
                  <EmployeeHome />
                ) : (
                  <CompanyNum />
                )
              }
            />
            <Route
              exact
              path="/create-company"
              element={alreadyUser ? <Login /> : <CreateCompany />}
            />
          </Routes>
        </Router>
      )}
    </div>
  );
};
