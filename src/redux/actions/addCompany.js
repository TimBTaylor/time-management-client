import axios from "axios";

export const addCompany = (userInfo) => async (dispatch) => {
  try {
    dispatch({
      type: "SET_USER_INFO_REQUEST",
    });
    await axios({
      method: "put",
      url: "https://timemanagement-env.eba-xnbvikdz.us-east-1.elasticbeanstalk.com/user/update-company",
      header: { "Content-Type": "application/json" },
      data: {
        email: userInfo.email,
        newCompanyNumber: userInfo.companyNumber,
        tableName: userInfo.tableName,
      },
    }).then((response) => {
      if (response.data === "Users company updated") {
        dispatch({
          type: "SET_USER_COMPANY_NUMBER",
          payload: userInfo.companyNumber,
        });
        dispatch({
          type: "SET_USER_VALID_CODE",
        });
      } else {
        dispatch({
          type: "SET_USER_INVALID_CODE",
        });
      }
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "SET_USER_INVALID_CODE",
    });
  }
  dispatch({
    type: "SET_USER_INFO_SUCCESS",
  });
};
