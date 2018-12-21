import randomAPI from "../apis/randomAPI";
import { Employee } from "./../models/Employee";

export const fetchEmployees = () => async dispatch => {
  const response = await randomAPI.get("?results=40&nat=us");
  const employees = response.data.results.map(
    employee => new Employee(employee)
  );
  dispatch({
    type: "FETCH_EMPLOYEES",
    employees: employees
  });
};

export const searchInput = input => (dispatch, getState) => {
  dispatch({
    type: "SEARCH_INPUT",
    payload: {
      input: input,
      employees: getState().employees
    }
  });
};

export const selectEmployee = employee => {
  return {
    type: "SELECT_EMPLOYEE",
    employee: employee
  };
};

export const closeModal = () => {
  return {
    type: "CLOSE_MODAL"
  };
};
