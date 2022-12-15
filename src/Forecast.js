import React from "react";
import "./Forecast.css";
import axios, { Axios } from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let key = "1a24eda60f6a073a6acaft9odbaee084";
  let city = props.data;
  let units = "metric";
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=${units}`;

  axios.get(apiURL).then(handleResponse);
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Thu</div>
          <img src={props.data.icon} alt={props.data.condition} />
          <div className="Forecast-temp">
            <span className="Forecast-max">20°</span>
            <span className="Forecast-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
