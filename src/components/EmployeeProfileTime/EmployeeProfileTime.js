import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allEntries } from "../../redux/actions/allEntries";
import { EmployeeProfileIndividualTime } from "./EmployeeProfileIndividualTime";

import "./EmployeeProfileTime.css";

export const EmployeeProfileTime = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userInfoReducer.userId);
  const isAdmin = useSelector((state) => state.userInfoReducer.isAdmin);
  const allTimeEntries = useSelector(
    (state) => state.userInfoReducer.allEntries
  );

  useEffect(() => {
    const userInfo = {
      userId,
      typeOfId: isAdmin ? "admin_id" : "user_id",
    };

    dispatch(allEntries(userInfo));
  }, [allTimeEntries, isAdmin, userId, dispatch]);
  return (
    <div className="employee-profile-time-container">
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Job Name</th>
              <th>Hours</th>
              <th>Minutes</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {allTimeEntries.map((entry) => {
              return (
                <EmployeeProfileIndividualTime key={entry.id} entry={entry} />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
