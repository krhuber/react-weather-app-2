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
            />
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Tuesday 10:00AM</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly cloudy"
          />
          <span className="temperature">72</span>
          <span className="unit">°F</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels Like: 75°F</li>
            <li>Humidity: 48%</li>
            <li>Wind: 9mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
