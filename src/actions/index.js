import randomAPI from "../apis/randomAPI";

export const fetchEmployees = () => async dispatch => {
  const response = await randomAPI.get("?results=12&nat=us");
  dispatch({
    type: "FETCH_EMPLOYEES",
    payload: response.data.results
  });
};

export const searchEmployees = () => (dispatch, getState) => {
  const state = getState();

  dispatch({
    type: "SEARCH_EMPLOYEES",
    state
  });
};

export const updateSearchInput = input => {
  return {
    type: "SEARCH_INPUT",
    input
  };
};
