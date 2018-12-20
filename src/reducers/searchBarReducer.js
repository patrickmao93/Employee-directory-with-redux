export default (state = "", action) => {
  switch (action.type) {
    case "SEARCH_INPUT":
      return action.payload.input;

    default:
      return state;
  }
};
