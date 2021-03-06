import axios from "axios";

export const addCompany = (userInfo) => async (dispatch) => {
  try {
    dispatch({
      type: "SET_USER_INFO_REQUEST",
    });
    await axios({
      method: "put",
      url: "https://timebasebytim.com/user/update-company",
      header: { "Content-Type": "application/json" },
      data: {
        email: userInfo.email,
        newCompanyNumber: userInfo.companyNumber,
        tableName: userInfo.tableName,
      },
    }).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: "SET_USER_COMPANY_NUMBER",
          payload: response.data.companyNumber,
        });
        dispatch({
          type: "SET_USER_COMPANY_NAME",
          payload: response.data.companyName,
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
