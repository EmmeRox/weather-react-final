import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </form>
      <h1>Tokyo</h1>
      <ul>
        <li>Wednesday 11:00</li>
        <li>Clear</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="clear"
          />
          40°F
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 10%</li>
            <li>Humidity: 90%</li>
            <li>Wind: 1 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
