import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  handleChange = (event) => {
    // Change the state of term
    this.setState({
      term: event.currentTarget.value
    });
    const { fetchGiphy } = this.props;
    fetchGiphy(event.currentTarget.value);
  }

  render() {
    return (
      <input
        value={this.state.term}
        className="form-search form-control"
        type="text"
        placeholder="Search for a gif"
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
