import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allEntries } from "../../redux/actions/allEntries";

export const EmployeeProfileTime = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userInfoReducer.userId);
  const isAdmin = useSelector((state) => state.userInfoReducer.isAdmin);
  const allTimeEntries = useSelector(
    (state) => state.userInfoReducer.allEntries
  );
  console.log(allTimeEntries);
  console.log(allTimeEntries.reverse());

  useEffect(() => {
    const userInfo = {
      userId,
      typeOfId: isAdmin ? "admin_id" : "user_id",
    };

    dispatch(allEntries(userInfo));
  }, []);
  return (
    <div className="employee-profile-time-container">
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
            let hours = entry.hours >= 10 ? entry.hours : "0" + entry.hours;
            let minutes = entry.minutes === 30 ? entry.minutes : "00";
            return (
              <tr key={entry.id}>
                <td>
                  {entry.date.substring(5) + "-" + entry.date.substring(0, 4)}
                </td>
                <td>{entry.job_name}</td>
                <td>{hours}</td>
                <td>{minutes}</td>
                <td>{entry.notes}</td>
                <td>x</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
