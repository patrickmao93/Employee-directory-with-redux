import React from "react";
import { connect } from "react-redux";

import { searchInput } from "../actions";

const onInputChange = props => {
  return event => {
    props.searchInput(event.target.value);
  };
};

const SearchBar = props => {
  return (
    <input
      className="search-bar"
      type="text"
      name="search"
      value={props.searchTerm}
      onChange={onInputChange(props)}
      placeholder="Start typing to search..."
    />
  );
};

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm
  };
};

export default connect(
  mapStateToProps,
  { searchInput }
)(SearchBar);
