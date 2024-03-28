import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{props.data.dt}</div>
      <div className="WeatherForecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} size={25} />
      </div>

      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}˚
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}˚
        </span>
      </div>
    </div>
  );
}
