import axios from "axios";

export const allEntries = (userInfo) => async (dispatch) => {
  try {
    // dispatch({
    //   type: "SET_USER_INFO_REQUEST",
    // });
    await axios({
      method: "get",
      url: `http://timemanagement-env.eba-xnbvikdz.us-east-1.elasticbeanstalk.com/time/${userInfo.userId}/${userInfo.typeOfId}/all-time-entries-user`,
      header: { "Content-Type": "applicaton/json" },
    }).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: "SET_USER_ALL_ENTRIES",
          payload: response.data,
        });
      }
    });
    // dispatch({
    //   type: "SET_USER_INFO_SUCCESS",
    // });
  } catch (error) {
    console.log(error);
  }
};
