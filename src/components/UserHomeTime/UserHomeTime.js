import React, { useState } from "react";

import "./UserHomeTime.css";

export const UserHomeTime = () => {
  const [weeklyTime] = useState([
    { day: "Mon hrs", hours: "09", minutes: "30" },
    { day: "Tues hrs", hours: "08", minutes: "00" },
    { day: "Wed hrs", hours: "08", minutes: "30" },
    { day: "Thur hrs", hours: "09", minutes: "30" },
    { day: "Fri hrs", hours: "08", minutes: "00" },
    { day: "Sat hrs", hours: "09", minutes: "30" },
    { day: "Sun hrs", hours: "10", minutes: "00" },
  ]);
  return (
    <div className="user-home-time-container">
      <div className="weekly-time">
        {weeklyTime.map((timelog) => {
          return (
            <div key={timelog.day}>
              <p>
                {timelog.hours}:{timelog.minutes}
              </p>
              <p>{timelog.day}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
