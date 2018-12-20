export default (state = false, action) => {
  switch (action.type) {
    case "SELECT_EMPLOYEE":
      return true;

    case "CLOSE_MODAL":
      return false;

    default:
      return state;
  }
};
