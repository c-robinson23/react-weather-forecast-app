import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return (5 / 9) * (props.fahrenheit - 32);
  }

  if (unit === "fahrenheit") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          ˚F |{" "}
          <a href="/" onClick={showCelsius}>
            ˚C
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(celsius())}</span>
        <span className="unit">
          <a href="/" onClick={showFahrenheit}>
            ˚F
          </a>{" "}
          | ˚C
        </span>
      </span>
    );
  }
}
