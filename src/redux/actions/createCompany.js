import axios from "axios";

export const createCompany = (companyInfo) => async (dispatch) => {
  try {
    await axios({
      method: "post",
      url: "https://timebasebytim.com/company/new-company/",
      header: { "Content-Type": "application/json" },
      data: {
        companyName: companyInfo.companyName,
        adminEmail: companyInfo.email,
        companyNumber: companyInfo.companyNumber,
      },
    }).then((response) => {
      if (response.data === "Company created") {
        dispatch({
          type: "SET_USER_COMPANY_NUMBER",
          payload: companyInfo.companyNumber,
        });
        dispatch({
          type: "SET_USER_COMPANY_NAME",
          payload: companyInfo.companyName,
        });
        dispatch({
          type: "CREATE_COMPANY_SUCCESS",
        });
      } else {
        dispatch({
          type: "CREATE_COMPANY_FAIL",
          error: response.data,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
