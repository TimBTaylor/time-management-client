import axios from "axios";

export const companiesEntries = (companyNumber) => async (dispatch) => {
  dispatch({
    type: "SET_USER_INFO_REQEUST",
  });
  try {
    await axios({
      method: "get",
      url: `http://timemanagement-env.eba-xnbvikdz.us-east-1.elasticbeanstalk.com/time/${companyNumber}/all-time-entries-company`,
    }).then((response) => {
      if (response.status === 200) {
        let sortedEntries = response.data.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });
        dispatch({ type: "SET_ALL_ENTRIES", payload: sortedEntries });
      } else {
      }
    });
  } catch (error) {
    console.log(error);
  }
  dispatch({
    type: "SET_USER_INFO_SUCCESS",
  });
};
