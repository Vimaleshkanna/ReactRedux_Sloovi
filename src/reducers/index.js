import { combineReducers } from "redux";
import taskReducer from "./task";
import authReducer from "./auth";

export default combineReducers({
  task: taskReducer,
  auth: authReducer,
});
