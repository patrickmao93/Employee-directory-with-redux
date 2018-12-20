import { combineReducers } from "redux";
import employeesReducer from "./employeesReducer";
import displayedEmployeesReducer from "./displayedEmployeesReducer";
import searchBarReducer from "./searchBarReducer";

export default combineReducers({
  employees: employeesReducer,
  displayedEmployees: displayedEmployeesReducer,
  searchTerm: searchBarReducer
});
