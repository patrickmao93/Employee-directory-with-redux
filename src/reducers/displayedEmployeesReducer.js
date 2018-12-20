export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_EMPLOYEES":
      return action.employees;

    case "SEARCH_INPUT":
      const employees = action.payload.employees;
      //execute search
      const displayedEmployees = employees.filter(employee =>
        employee.info.name.includes(action.payload.input)
      );
      return displayedEmployees;

    default:
      return state;
  }
};
