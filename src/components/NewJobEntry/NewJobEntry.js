import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { JobEntryModal } from "../JobEntryModal/JobEntryModal";
import "./NewJobEntry.css";
import { allJobs } from "../../redux/actions/allJobs";

export const NewJobEntry = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const [jobName, setJobName] = useState();
  const [jobPo, setJobPo] = useState();
  const [jobFor, setJobFor] = useState();
  const [comments, setComments] = useState();
  const [popup, setPopup] = useState(false);

  const companyNumber = useSelector(
    (state) => state.userInfoReducer.companyNumber
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: "post",
        url: "https://timebasebytim.com/jobs/new-job",
        headers: { "Content-Type": "application/json" },
        data: {
          companyNumber,
          jobName,
          jobFor,
          jobPo,
          comments,
        },
      }).then((response) => {
        if (response.status === 201) {
          setPopup(true);
          dispatch(allJobs(companyNumber));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
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
      {popup ? <JobEntryModal /> : ""}
      <div
        ref={ref}
        className={popup ? "new-job-container popup" : "new-job-container"}
      >
        <h1>Create Job</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="job_name">Job Name</label>
            <input
              type="text"
              required
              placeholder="Job Name"
              name="job_name"
              onChange={(e) => setJobName(e.target.value)}
            />
            <label htmlFor="job_po">Job PO</label>
            <input
              type="text"
              required
              name="job_po"
              placeholder="Job PO"
              onChange={(e) => setJobPo(e.target.value)}
            />
            <label htmlFor="job_for">Customer Name</label>
            <input
              type="text"
              required
              name="job_for"
              placeholder="Customer Name"
              onChange={(e) => setJobFor(e.target.value)}
            />
            <textarea
              className="comments"
              type="text"
              placeholder="Job Comments"
              onChange={(e) => setComments(e.target.value)}
            />
          </div>
          <button type="submit">CREATE JOB</button>
        </form>
      </div>
    </>
  );
};
