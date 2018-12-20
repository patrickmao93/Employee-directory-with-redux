import { combineReducers } from "redux";
import employeesReducer from "./employeesReducer";
import displayedEmployeesReducer from "./displayedEmployeesReducer";
import searchBarReducer from "./searchBarReducer";
import selectedEmployeeReducer from "./selectedEmployeeReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  employees: employeesReducer,
  displayedEmployees: displayedEmployeesReducer,
  searchTerm: searchBarReducer,
  selectedEmployee: selectedEmployeeReducer,
  showModal: modalReducer
});
