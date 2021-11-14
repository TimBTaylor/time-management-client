import { combineReducers } from "redux";
import userInfoReducer from "./userInfo";

export const rootReducer = combineReducers({
  userInfoReducer,
});
