import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  return (
    <div className="canvas">
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="palevioletred"
        size={80}
        animate={true}
      />
    </div>
  );
}
