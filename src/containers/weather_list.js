import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

  renderWeather(cityData) {
    // const temperatures = _.map(cityData.list.map(weather => weather.temp.day), (temp) => (temp * 9/5) - 459.67);
    //T(K) × 9/5 - 459.67
    const temperatures = cityData.list.map(weather => weather.temp.day);
    console.log(temperatures);

    return (
      <div key={cityData.city.id} className="city">
        <div className="cityName">
          {cityData.city.name}
        </div>
        <Chart data={temperatures} color="lightblue" type="avg" units="F" />
      </div>
    );
  }

  render() {
    return (
      <div id="weatherData">
        {this.props.weather.map(this.renderWeather)}
      </div>
    );
  }
}

function mapDispatchToProps({ weather }) {
  return { weather };
}

export default connect(mapDispatchToProps)(WeatherList);
