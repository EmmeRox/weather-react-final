import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      wind: response.data.wind.speed,
      condition: response.data.condition.description,
      feels: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <button className="btn btn-primary w-100">Search</button>
            </div>
          </div>
        </form>
        <h1>{props.defaultCity}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.condition}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.icon} alt={weatherData.condition} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like: {Math.round(weatherData.feels)}°C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1a24eda60f6a073a6acaft9odbaee084";
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
