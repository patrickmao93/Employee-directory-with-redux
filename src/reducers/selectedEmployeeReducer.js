export default (state = {}, action) => {
  switch (action.type) {
    case "SELECT_EMPLOYEE":
      return action.employee;

    default:
      return state;
  }
};
