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
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <h1>New York</h1>
      <ul>
        <li>Sunday 15:00</li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Partly Cloudy"
              className="float-left"
            />
            <span className="float-left">
              <span className="temperature">62</span>
              <span className="unit">˚F</span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 25%</li>
            <li>Wind: 18 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
