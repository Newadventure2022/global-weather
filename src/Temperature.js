import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("metric");

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (unit === "metric") {
    return (
      <div className="TempConversion">
        <div className="d-flex">
          <h2 id="temp-display">{Math.round(props.temp)}</h2>
          <span>
            °C |{" "}
            <a href="/" onClick={convertFahrenheit}>
              °F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    let fahrenheit = Math.round(props.temp * 9) / 5 + 32;
    return (
      <div className="TempConversion">
        <div className="d-flex">
          <h2 id="temp-display">{Math.round(fahrenheit)}</h2>
          <span>
            <a href="/" onClick={convertCelsius}>
              °C{" "}
            </a>{" "}
            | °F
          </span>
        </div>
      </div>
    );
  }
}
