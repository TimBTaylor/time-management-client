import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEntry } from "../../redux/actions/deleteEntry";

import "./EmployeeProfileTime.css";

export const EmployeeProfileIndividualTime = (props) => {
  const entry = props.entry;
  const dispatch = useDispatch();
  const [timeEntryId] = useState(entry.id);
  const [jobName] = useState(entry.job_name);
  const [timeEntryDate] = useState(entry.date);
  const userID = useSelector((state) => state.userInfoReducer.userId);
  const isAdmin = useSelector((state) => state.userInfoReducer.isAdmin);

  const allEntries = useSelector((state) => state.userInfoReducer.allEntries);

  const handleDelete = () => {
    let timeEntryInfo = {
      timeEntryId,
      jobName,
      timeEntryDate,
      userID,
      typeOfId: isAdmin ? "admin_id" : "user_id",
      allEntries,
    };

    dispatch(deleteEntry(timeEntryInfo));
  };

  let hours = entry.hours >= 10 ? entry.hours : "0" + entry.hours;
  let minutes = entry.minutes === 30 ? entry.minutes : "00";
  return (
    <tr className="tr" key={entry.id}>
      <td>{entry.date.substring(5) + "-" + entry.date.substring(0, 4)}</td>
      <td>{entry.job_name}</td>
      <td>{hours}</td>
      <td>{minutes}</td>
      <td>{entry.notes}</td>
      <td onClick={handleDelete}>
        <button>X</button>
      </td>
    </tr>
  );
};
