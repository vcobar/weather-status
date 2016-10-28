import _ from 'lodash';
import React, { Component } from 'react';

class WeatherDays extends Component {
  renderDay() {
    const tempUnit = this.props.units;
    return (
      this.props.data.map( (weather)=> {
        let conditionUrl = `http://openweathermap.org/img/w/${weather.icon}.png`
        return (
          <div className="cityDay" key={ weather.tempDate }>
            <div className="tempDate">{ weather.tempDate }</div>
            <div className="weatherDescription"><img src={ conditionUrl } alt={ weather.description} /></div>
            <div className="highTemp">
              <span>H: </span>
              { weather.tempHigh } {tempUnit}
            </div>
            <div className="lowTemp">
              <span>L: </span>
              { weather.tempLow } {tempUnit}
            </div>
            <div className="windSpeed">{ weather.windSpeed } mph</div>
          </div>
        );
      })
    );
  }
  render() {
    return (
      <div className="cityForecast">
        {this.renderDay()}
      </div>
    );
  }
}

export default WeatherDays;
