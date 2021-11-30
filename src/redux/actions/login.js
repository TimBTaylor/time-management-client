import axios from "axios";

export const login = (userInfo) => async (dispatch) => {
  try {
    dispatch({
      type: "SET_USER_INFO_REQUEST",
    });
    await axios({
      method: "post",
      url: "https://timemanagement-env.eba-xnbvikdz.us-east-1.elasticbeanstalk.com/user/auth/login",
      header: { "Content-Type": "application/json" },
      data: {
        email: userInfo.email,
        givenName: userInfo.givenName,
        familyName: userInfo.familyName,
        picture: userInfo.picture,
      },
    }).then((response) => {
      dispatch({
        type: "SET_USER_INFO_SUCCESS",
      });
      if (response.status === 200) {
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
        console.log(response);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
