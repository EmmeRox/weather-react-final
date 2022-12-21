import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import "./ForecastDay.css";
import axios from "axios";

export default function Forecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.data]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (daily, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={daily} />
                </div>
              );
            } else {
              return null;
            }
          })}
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
