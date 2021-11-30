import axios from "axios";

export const createAdmin = (userInfo) => async (dispatch) => {
  dispatch({
    type: "SET_USER_INFO_REQUEST",
  });
  try {
    await axios({
      method: "post",
      url: "https://timebasebytim.com/user/auth/create-admin",
      headers: { "Content-Type": "application/json" },
      data: {
        email: userInfo.email,
        givenName: userInfo.givenName,
        familyName: userInfo.familyName,
        picture: userInfo.picture,
      },
    }).then((response) => {
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: "SET_USER_INFO",
          payload: {
            firstName: response.data.first_name,
            lastName: response.data.last_name,
            email: response.data.email,
            image: response.data.profile_image,
            userId: response.data.id,
            companyNumber: response.data.company_number,
            isAdmin: response.data.is_admin,
            date: response.data.date,
          },
        });
      } else {
        dispatch({
          type: "SET_USER_INFO_ERROR",
          error: response.statusText,
        });
      }
    });
    dispatch({
      type: "SET_USER_INFO_SUCCESS",
    });
  } catch (error) {
    console.log(error);
  }
};
