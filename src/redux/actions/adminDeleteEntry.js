import axios from "axios";
import { companiesEntries } from "./companiesEntries";

export const adminDeleteEntry = (timeEntryInfo) => async (dispatch) => {
  dispatch({
    type: "SET_USER_INFO_REQUEST",
  });

  try {
    await axios({
      method: "delete",
      url: "https://timebasebytim.com/time/delete-time-entry",
      header: { "Content-Type": "application/json" },
      data: {
        timeEntryId: timeEntryInfo.timeEntryId,
        userID: timeEntryInfo.userID,
        typeOfId: timeEntryInfo.typeOfId,
        jobName: timeEntryInfo.jobName,
        date: timeEntryInfo.timeEntryDate,
      },
    }).then((response) => {
      if (response.status === 200) {
        dispatch(companiesEntries(timeEntryInfo.companyNumber));
      } else {
        console.log(response.data);
      }
    });
  } catch (error) {
    console.log(error);
  }
  dispatch({
    type: "SET_USER_INFO_SUCCESS",
  });
};
