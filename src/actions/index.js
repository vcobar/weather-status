import axios from 'axios';

const API_KEY = '95e88320b7a74ecceab946305af2213c'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?appid=${API_KEY}`;
const COUNTRY_CODE = 'us';
const FORECAST_DAYS = 5;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},${COUNTRY_CODE}&cnt=${FORECAST_DAYS}&units=imperial`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
