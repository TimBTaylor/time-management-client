import axios from "axios";
import { weeklyTimeEntries } from "./weeklyTimeEntries";

export const deleteEntry = (timeEntryInfo) => async (dispatch) => {
  dispatch({
    type: "SET_USER_INFO_REQUEST",
  });
  let allEntries = timeEntryInfo.allEntries;
  allEntries.filter((entry) => {
    return entry.id !== timeEntryInfo.timeEntryid;
  });
  try {
    await axios({
      method: "delete",
      url: "http://timemanagement-env.eba-xnbvikdz.us-east-1.elasticbeanstalk.com/time/delete-time-entry",
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
        dispatch({
          type: "SET_USER_ALL_ENTRIES",
          payload: allEntries,
        });
        let userInfo = {
          userID: timeEntryInfo.userID,
          typeOfId: timeEntryInfo.typeOfId,
        };
        dispatch(weeklyTimeEntries(userInfo));
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
