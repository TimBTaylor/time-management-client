const initialState = {
  invalidCode: false,
  alreadyUser: false,
};

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALREADY_USER":
      return {
        ...state,
        alreadyUser: true,
      };
    case "NOT_USER":
      return {
        ...state,
        alreadyUser: false,
      };
    case "SET_USER_INVALID_CODE":
      return {
        ...state,
        invalidCode: true,
      };
    case "SET_USER_VALID_CODE":
      return {
        ...state,
        invalidCode: false,
      };
    default:
      return state;
  }
};

export default errorsReducer;
