import { combineReducers } from "redux";
import student from "../reducer/student"

const CombineReducers=combineReducers({student:student})

export default CombineReducers;
