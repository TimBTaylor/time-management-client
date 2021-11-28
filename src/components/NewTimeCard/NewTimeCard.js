import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allJobs } from "../../redux/actions/allJobs";
import axios from "axios";
import { TimeEntryModal } from "../TimeEntryModal/TimeEntryModal";

import "./NewTimeCard.css";

export const NewTimeCard = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const [defaultHours] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [date, setDate] = useState();
  const [jobName, setJobName] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [notes, setNotes] = useState();
  const [popup, setPopup] = useState(false);

  const isAdmin = useSelector((state) => state.userInfoReducer.isAdmin);
  const userId = useSelector((state) => state.userInfoReducer.userId);
  const companyNumber = useSelector(
    (state) => state.userInfoReducer.companyNumber
  );
  const jobs = useSelector((state) => state.userInfoReducer.jobs);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      }).then((response) => {
        if (response.status === 201) {
          setPopup(true);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(allJobs(companyNumber));

    const ifClickedOutside = (e) => {
      if (!ref.current.contains(e.target)) {
        setPopup(false);
      }
    };

    document.addEventListener("mousedown", ifClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", ifClickedOutside);
    };
  }, [companyNumber, dispatch]);

  return (
    <>
      {popup ? <TimeEntryModal /> : ""}
      <div
        ref={ref}
        className={
          popup ? "new-time-card-container popup" : "new-time-card-container"
        }
      >
        <h1>Add Entry</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              type="date"
              required
              onChange={(e) => setDate(e.target.value)}
            />
            <select
              required
              onChange={(e) => {
                setJobName(e.target.value);
              }}
            >
              <option value="">Select Job</option>
              {jobs.map((job) => {
                return (
                  <option key={job.job_po} value={job.job_name}>
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
            <textarea
              className="notes"
              type="text"
              placeholder="Time Entry Notes"
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <button type="submit">SAVE</button>
        </form>
      </div>
    </>
  );
};
