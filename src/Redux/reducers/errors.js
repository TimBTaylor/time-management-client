const initialState = {
  invalidCode: false,
  companyCreated: true,
  companyCreatdError: null,
};

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case "CREATE_COMPANY_SUCCESS":
      return {
        ...state,
        companyCreated: true,
      };
    case "CREATE_COMPANY_FAIL":
      return {
        ...state,
        companyCreated: false,
      };
    default:
      return state;
  }
};

export default errorsReducer;
