import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.iconUrl}
              alt="Partly Cloudy"
              className="float-left"
            />
            <span className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">˚F</span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}