import React, { Component } from 'react';

import SearchBar from '../containers/search_bar'
import WeatherList from '../containers/weather_list'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="appTitle">Weather In Your Hood</div>
        <SearchBar/>
        <WeatherList/>
      </div>
    );
  }
}
