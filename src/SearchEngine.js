import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState(" ");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    //console.log(response.data);
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function searchCity() {
    let apiKey = "97c2f6a3b34509ac62090edc5d18d949";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(showTemperature);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input type="submit" name="search" value={"Search"} />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {" "}
        {form}{" "}
        <ul>
          <li> City: {city}</li>
          <li> Temperature: {Math.round(weather.temperature)}˚F</li>
          <li> Description: {weather.description}</li>
          <li> Humidity: {weather.humidity}%</li>
          <li> Wind: {weather.wind} mph</li>
          <li>
            {" "}
            <img src={weather.icon} alt="weater icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
