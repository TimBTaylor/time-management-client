import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import "./JobEntryModal.css";

export const JobEntryModal = () => {
  return (
    <div className="job-entry-modal-container">
      <div>
        <p>Job Created</p>
        <p>
          {" "}
          <BsCheckCircle />
        </p>
      </div>
    </div>
  );
};
