import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  console.log(forecast[0]);

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <div className="Forecast-day">Thu</div>
            <img src={forecast[0].condition.icon} alt={forecast[0].condition} />
            <div className="Forecast-temp">
              <span className="Forecast-max">20°</span>
              <span className="Forecast-min">10°</span>
            </div>
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
