import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allJobs } from "../../redux/actions/allJobs";
import axios from "axios";

import "./NewTimeCard.css";

export const NewTimeCard = () => {
  const dispatch = useDispatch();
  const [defaultHours] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [date, setDate] = useState();
  const [jobName, setJobName] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [notes, setNotes] = useState();

  const isAdmin = useSelector((state) => state.userInfoReducer.isAdmin);
  const userId = useSelector((state) => state.userInfoReducer.userId);
  const companyNumber = useSelector(
    (state) => state.userInfoReducer.companyNumber
  );
  const jobs = useSelector((state) => state.userInfoReducer.jobs);
  const handleSubmit = async () => {
    //has not been test, create a popup saying time has been submitted or that it hasnt
    try {
      await axios({
        method: "post",
        url: "http://timemanagement-env.eba-xnbvikdz.us-east-1.elasticbeanstalk.com/time/new-time-entry",
        headers: { "Content-Type": "application/json" },
        data: {
          adminId: isAdmin ? userId : null,
          userId: isAdmin ? null : userId,
          jobName,
          hours,
          minutes,
          notes,
          companyNumber,
          date,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(allJobs(companyNumber));
  });

  return (
    <div className="new-time-card-container">
      <h1>Add Entry</h1>
      <form>
        <div>
          <input
            type="date"
            required
            onChange={(e) => setDate(e.target.value)}
          />
          <select required onChange={(e) => setJobName(e.target.value)}>
            <option value="">Select Job</option>
            {jobs.map((job) => {
              return (
                <option key={job.id} value={job.job_name}>
                  {job.job_po} - {job.job_name}
                </option>
              );
            })}
          </select>
          <select required onChange={(e) => setHours(e.target.value)}>
            <option value="">Select Hours</option>
            {defaultHours.map((hour) => {
              return (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              );
            })}
          </select>
          <select required onChange={(e) => setMinutes(e.target.value)}>
            <option value="">Select Minutes</option>
            <option value="00">00</option>
            <option value="30">30</option>
          </select>
          <input
            className="notes"
            type="text"
            placeholder="Time Entry Notes"
            onChange={(e) => setNotes(e.target.value)}
          />
          <button type="submit" value="submit" onClick={handleSubmit}>
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};
