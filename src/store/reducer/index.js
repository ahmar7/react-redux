import { combineReducers } from "redux";
import appreducer from "./appreducer";
import authreducer from "./authreducer";

export default combineReducers({
  app: appreducer,
  auth: authreducer,
});
