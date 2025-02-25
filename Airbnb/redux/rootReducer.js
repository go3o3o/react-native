import { combineReducers } from "redux";
import userSlice from "./userSlice";
import roomSlice from "./roomSlice";

export default combineReducers({
  userSlice,
  roomSlice,
});
