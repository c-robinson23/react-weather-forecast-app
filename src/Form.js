import React from "react";

export default function Form() {
  return (
    <div class="weather-app">
      <header>
        <form class="search-form" id="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            id="search-form-input"
            class="search-form-input"
          />
          <input type="submit" value="Search" class="search-form-button" />
        </form>
      </header>
      <main>
        <div class="weather-app-data">
          <div>
            <h1 class="weather-app-city" id="city">
              City
            </h1>
            <p class="weather-app-details">
              <span id="time"></span>,<span id="description"></span>
              <br />
              Humidity: <strong id="humidity"></strong>, Wind:
              <strong id="wind-speed"></strong>
            </p>
          </div>
          <div class="weather-app-temperature-container">
            <div id="icon"></div>
            <div class="weather-app-temperature" id="temperature"></div>
            <div class="weather-app-unit">°F</div>
          </div>
        </div>

        <div class="weather-forecast" id="forecast">
          <div class="row">
            <div class="col-2">
              <div class="weather-forecast-date"></div>
              Thu
            </div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              alt=""
              width="42"
            />
            <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperature-max">18˚</span>
              <span class="weather-forecast-temperature-min">12˚</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
