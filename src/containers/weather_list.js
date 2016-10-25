import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

  renderWeather(cityData) {
    const temperatures = _.map(cityData.list.map(weather => weather.main.temp), (temp) => (temp * 9/5) - 459.67);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
//T(K) × 9/5 - 459.67
    return (
      <tr key={cityData.city.id}>
        <td className="city">{cityData.city.name}</td>
        <td>
          <Chart data={temperatures} color="lightblue" type="avg" units="F" />
        </td>
        <td>
          <Chart data={pressures} color="orange" type="avg" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="purple" type="avg" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table id="WeatherData">
        <thead>
          <tr>
            <th className="city">City</th>
            <th>Temperatures (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapDispatchToProps({ weather }) {
  return { weather };
}

export default connect(mapDispatchToProps)(WeatherList);
