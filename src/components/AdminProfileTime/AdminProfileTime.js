import React, { useState, useEffect } from "react";
import { EmployeeProfileTime } from "../EmployeeProfileTime/EmployeeProfileTime";
import { AllEmployeeTime } from "./AllEmployeeTime";
import { useSelector, useDispatch } from "react-redux";
import { companiesEntries } from "../../redux/actions/companiesEntries";

import "./AdminProfileTime.css";

export const AdminProfileTime = () => {
  const dispatch = useDispatch();
  const [companyTime, setCompanyTime] = useState(false);
  const companyNumber = useSelector(
    (state) => state.userInfoReducer.companyNumber
  );
  const allCompaniesEntries = useSelector(
    (state) => state.companyEntriesReducer.allEntries
  );

  useEffect(() => {
    dispatch(companiesEntries(companyNumber));
  }, [dispatch, companyNumber]);

  return (
    <div className="admin-profile-time">
      <div className="admin-buttons">
        <button
          className={companyTime ? "" : "active"}
          onClick={() => setCompanyTime(false)}
        >
          Your Time
        </button>
        <button
          className={companyTime ? "active" : ""}
          onClick={() => setCompanyTime(true)}
        >
          Employees Time
        </button>
      </div>
      {companyTime ? (
        <div className="all-time-container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Job Name</th>
                <th>Hours</th>
                <th>Minutes</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {allCompaniesEntries.map((entry) => {
                return (
                  <AllEmployeeTime entry={entry} key={entry.time_entry_id} />
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <EmployeeProfileTime />
      )}
    </div>
  );
};
