export default (state = [], action) => {
  switch (action.type) {
    case "INITIALIZE":
      return action.payload;
    case "SEARCH":
      const employees = action.payload;
      //execute search
      const displayedEmployees = employees.filter(employee =>
        employee.name.includes()
      );
      return state;

    default:
      return state;
  }
};
