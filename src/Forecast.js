import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  console.log(props.data);
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
