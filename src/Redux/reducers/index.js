import { combineReducers } from "redux";
import userInfoReducer from "./userInfo";
import errorsReducer from "./errors";

export const rootReducer = combineReducers({
  userInfoReducer,
  errorsReducer,
});
