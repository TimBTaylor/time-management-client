const intitialState = {
  firstName: "",
  lastName: "",
  email: "",
  image: "",
  userId: "",
  companyNumber: "",
  companyName: "",
  isAdmin: "",
  date: "",
  isLoading: false,
  error: null,
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
    case "SET_USER_INFO_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_USER_INFO_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };
    case "SET_USER_INFO_ERROR":
      return {
        ...state,
        error: action.error,
      };
    case "SET_USER_COMPANY_NUMBER":
      return {
        ...state,
        companyNumber: action.payload,
      };
    case "SET_USER_COMPANY_NAME":
      return {
        ...state,
        companyName: action.payload,
      };
    case "SET_USER_IS_ADMIN":
      return {
        ...state,
        isAdmin: 1,
      };
    case "SET_USER_IS_NOT_ADMIN":
      return {
        ...state,
        isAdmin: 0,
      };
    case "SET_USER_IMAGE":
      return {
        ...state,
        image: action.payload,
      };
    default:
      return state;
  }
};

export default userInfoReducer;
