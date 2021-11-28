import React, { useState, useEffect } from "react";
import { RiFileList2Fill } from "react-icons/ri";
import { FiClipboard } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { weeklyTimeEntries } from "../../redux/actions/weeklyTimeEntries";
import { startOfWeek } from "date-fns";
import { Link } from "react-router-dom";

import "./UserHomeTime.css";

export const UserHomeTime = () => {
  const dispatch = useDispatch();

  const [mondaysDate, setMondaysDate] = useState();

  const entriesToDisplay = useSelector(
    (state) => state.userInfoReducer.entriesToDisplay
  );
  const userID = useSelector((state) => state.userInfoReducer.userId);
  const isAdmin = useSelector((state) => state.userInfoReducer.isAdmin);
  let totalTime = useSelector((state) => state.userInfoReducer.weeklyTime);

  let typeOfId = isAdmin ? "admin_id" : "user_id";

  function getMonday() {
    const weekStart = startOfWeek(new Date());

    let year = weekStart.getFullYear();
    let month = (1 + weekStart.getMonth()).toString().padStart(2, "0");
    let day = weekStart.getDate().toString().padStart(2, "0");

    setMondaysDate(month + "/" + day + "/" + year);
  }

  useEffect(() => {
    const userInfo = {
      userID,
      typeOfId,
    };
    dispatch(weeklyTimeEntries(userInfo));
    getMonday(new Date());
  }, [typeOfId, userID, dispatch]);

  return (
    <div className="user-home-time-container">
      <div className="weekly-time">
        {entriesToDisplay.map((entry) => {
          return (
            <div key={entriesToDisplay.indexOf(entry)}>
              <p>
                {entry.hours}:{entry.minutes}
              </p>
              <p>{entry.date}</p>
            </div>
          );
        })}
      </div>
      <div className="total-hours-container">
        <p className="total-hours">{totalTime}</p>
        <p className="this-week">THIS WEEK {mondaysDate}</p>
      </div>
      <button>Submit Weekly Hours</button>
      <div className="time-job-container">
        <div className="new-time-card">
          <Link to="/new-time-card">
            <RiFileList2Fill />
          </Link>
          <p>New Time Card</p>
        </div>
        {isAdmin ? (
          <div className="new-job">
            <Link to="/new-job">
              <FiClipboard />
            </Link>
            <p>Create New Job</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
