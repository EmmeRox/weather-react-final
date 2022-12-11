import React, { useState } from "react";

export default function Conversion(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFah(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertToFah}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCel}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
