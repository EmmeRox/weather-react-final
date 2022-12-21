import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <ForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let key = "1a24eda60f6a073a6acaft9odbaee084";
    let city = props.data;
    let units = "metric";
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=${units}`;

    axios.get(apiURL).then(handleResponse);
    return "Loading";
  }
}
