import { combineReducers } from "redux";
import userInfoReducer from "./userInfo";
import errorsReducer from "./errors";
import companyEntriesReducer from "./companyEntries";

export const rootReducer = combineReducers({
  userInfoReducer,
  errorsReducer,
  companyEntriesReducer,
});
