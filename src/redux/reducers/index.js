import { combineReducers } from "redux";
import users from "./users";
import { commonReducer } from "./commonState";

const rootReducer = combineReducers({
  users: users,
  common: commonReducer
});

export default rootReducer;
