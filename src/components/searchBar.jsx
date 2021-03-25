import React, { Component } from 'react';

class SearchBar extends Component {
  shouldComponentUpdate() {
    return false;
  }

  handleChange = (event) => {
    const { fetchGiphy } = this.props;
    fetchGiphy(event.currentTarget.value);
  }

  render() {
    console.log("Aren't you nosy?");
    return (
      <input
        className="form-search form-control"
        type="text"
        placeholder="Search for a gif"
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
