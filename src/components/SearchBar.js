import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange(event) {
    this.setState(event.target.value);
  }

  render() {
    return (
      <input
        className="search-bar"
        type="text"
        name="search"
        value={this.state.term}
        onChange={this.onInputChange}
        placeholder="Start typing to search..."
      />
    );
  }
}

export default SearchBar;
