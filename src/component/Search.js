import React from 'react';

import '../container/Main.css'

class Search extends React.Component {

  state = {text: ""}

  handleSearch = e => {
    this.setState({ text: e.target.value });
    this.props.filterFunc(e.target.value);
  }

  render() {
    return(
      <div className="search__box">
        <input 
          className="search__input"
          placeholder="Search"
          type="text"
          value={this.state.text}
          onChange={this.handleSearch}
        />
      </div>
    );
  }
}

export default Search;