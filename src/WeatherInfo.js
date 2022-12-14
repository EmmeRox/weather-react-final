import React from "react";
import FormattedDate from "./FormattedDate";
import Conversion from "./Conversion";

export default function WeatherInfo(props) {
  console.log(props.data.city);
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.condition}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-md-6 d-none d-md-block">
              <img src={props.data.icon} alt={props.data.condition} />
            </div>
            <div className="col-md-6 main-temp">
              <Conversion celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {Math.round(props.data.feels)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
