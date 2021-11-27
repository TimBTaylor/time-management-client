import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminDeleteEntry } from "../../redux/actions/adminDeleteEntry";

export const AllEmployeeTime = (props) => {
  const entry = props.entry;
  const dispatch = useDispatch();
  const [jobName] = useState(entry.job_name);
  const [timeEntryDate] = useState(entry.date);
  const [timeEntryId] = useState(entry.time_entry_id);
  const [userEntryId] = useState(entry.id);
  const companyNumber = useSelector(
    (state) => state.userInfoReducer.companyNumber
  );

  const handleDelete = () => {
    let timeEntry = {
      timeEntryId,
      timeEntryDate,
      jobName,
      userID: userEntryId,
      typeOfId: "user_id",
      companyNumber,
    };

    dispatch(adminDeleteEntry(timeEntry));
  };

  dispatch({
    type: "USER_LOGOUT",
  });

  return (
    <tr className="tr" key={entry.id}>
      <td>{entry.date.substring(5) + "-" + entry.date.substring(0, 4)}</td>
      <td>
        {entry.first_name} {entry.last_name}
      </td>
      <td>{entry.job_name}</td>
      <td>{entry.hours}</td>
      <td>{entry.minutes}</td>
      <td>{entry.notes}</td>
      <td>
        <button onClick={() => handleDelete()}>X</button>
      </td>
    </tr>
  );
};
