import axios from "axios";

export const allJobs = (companyNumber) => async (dispatch) => {
  try {
    await axios({
      method: "post",
      url: "http://timemanagement-env.eba-xnbvikdz.us-east-1.elasticbeanstalk.com/jobs/all-company-jobs",
      header: { "Content-Type": "application/json" },
      data: {
        companyNumber,
      },
    }).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: "SET_USER_JOBS",
          payload: response.data,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
