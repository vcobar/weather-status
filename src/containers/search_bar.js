import React, { Component } from 'react';
import logo from '../images/logo.jpg';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event) {
    this.setState({searchTerm: event.target.value})
  }
  onFormSubmit(event){
    event.preventDefault();
  }
  render() {
    return (
      <div className="searchBar">
        <img src={logo} className="weatherLogo" alt="logo" />
        <form onSubmit={this.onFormSubmit}>
        <div className="fieldContainer">
            <input
              placeholder="Get a forecast in your fave cities"
              name="searchTerm"
              id="searchTerm"
              className="searchTerm field"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
              required
            />
            <label htmlFor="searchTerm" className="floating-label">Zip Code or Name of City</label>
          </div>
          <button className="searchButton">Search</button>
        </form>
      </div>
    )
  }
}
