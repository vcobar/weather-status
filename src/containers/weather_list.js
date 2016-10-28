import _ from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherDays from '../components/weather_days';

class WeatherList extends Component {

  renderWeather(cityData) {
    // const temperatures = _.map(cityData.list.map(weather => weather.temp.day), (temp) => (temp * 9/5) - 459.67);
    //T(K) × 9/5 - 459.67
    const weatherData = cityData.list.map(weatherObject => ({
      tempDate: moment.unix(weatherObject.dt).format("ddd MMM DD"),
      tempHigh: weatherObject.temp.max,
      tempLow: weatherObject.temp.min,
      windSpeed: weatherObject.speed,
      description: _.startCase(_.toLower(weatherObject.weather[0].description)),
      icon: weatherObject.weather[0].icon
    }));
    console.log(weatherData);

    return (
      <div key={cityData.city.id} className="city">
        <div className="cityName">
          {_.upperCase(cityData.city.name)}
        </div>
        <WeatherDays data={weatherData} color="#F7C569" type="avg" units="&#8457;" />
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
