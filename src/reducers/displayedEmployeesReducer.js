export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_EMPLOYEES":
      return action.employees.map((employee, index) => ({
        ...employee,
        index
      }));

    case "SEARCH_INPUT":
      const employees = action.payload.employees;
      const searchTerm = action.payload.input
        .trim()
        .split(" ")
        .join("")
        .toLowerCase();
      //execute search
      const displayedEmployees = employees
        .filter(employee => employee.info.name.includes(searchTerm))
        .map((employee, index) => ({ ...employee, index }));
      return displayedEmployees;

    default:
      return state;
  }
};
