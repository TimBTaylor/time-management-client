const intitialState = {
  firstName: "",
  lastName: "",
  email: "",
  image: "",
  userId: "",
  companyNumber: "",
  isAdmin: "",
  date: "",
};

const userInfoReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        image: action.payload.image,
        userId: action.payload.userId,
        companyNumber: action.payload.companyNumber,
        isAdmin: action.payload.isAdmin,
        date: action.payload.date,
      };

    default:
      return state;
  }
};

export default userInfoReducer;
