import React from "react";
import "./TimeEntryModal.css";
import { BsCheckCircle } from "react-icons/bs";

export const TimeEntryModal = () => {
  return (
    <div className="time-entry-modal-container">
      <div>
        <p>Entry Added</p>
        <p>
          {" "}
          <BsCheckCircle />
        </p>
      </div>
    </div>
  );
};
