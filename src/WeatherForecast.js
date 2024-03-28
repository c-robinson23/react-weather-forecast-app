import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "2b6fdad0cbd018949c50c70f72250726";
  let longitude = 40.7;
  let latitude = 74;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=74&lon=40.7&appid=2b6fdad0cbd018949c50c70f72250726&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">
            <WeatherIcon code="01d" size={25} />
          </div>

          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19˚</span>
            <span className="WeatherForecast-temperature-min">10˚</span>
          </div>
        </div>
      </div>
    </div>
  );
}
