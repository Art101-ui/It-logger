import logReducer from "./logReducer";
import techReducer from "./techReducer";
import { combineReducers } from "redux";

export default combineReducers({
  log:logReducer,
  tech:techReducer
})