const initialState = {
  allEntries: [],
};

const companyEntriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_ENTRIES":
      return {
        ...state,
        allEntries: action.payload,
      };
    default:
      return state;
  }
};

export default companyEntriesReducer;
