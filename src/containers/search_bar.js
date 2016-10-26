import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

import logo from '../images/logo.jpg';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
    this.setState({searchTerm: event.target.value})
  }
  onFormSubmit(event){
    event.preventDefault();

    this.props.fetchWeather(this.state.searchTerm);
    this.setState({ searchTerm: '' });
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
            <label htmlFor="searchTerm" className="floating-label">City</label>
          </div>
          <button className="searchButton">Search</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
