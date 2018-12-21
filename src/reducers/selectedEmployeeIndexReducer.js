export default (state = null, action) => {
  switch (action.type) {
    case "SELECT_EMPLOYEE":
      return action.employee.index;

    default:
      return state;
  }
};
