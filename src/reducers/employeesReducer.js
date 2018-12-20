import { Employee } from "./../models/Employee";

export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_EMPLOYEES":
      return action.payload.map(employee => new Employee(employee));

    default:
      return state;
  }
};
