import React from "react";
import Temperature from "./subComponents/Temperature";
import DateAndTime from "./subComponents/DateAndTime";
import Flag from "./subComponents/Flag";
import "./Part1.css";

function Part1({ weather }) {
  return (
    <div className="part1-container">
      <Temperature city={weather.city} country={weather.country} temp={weather.temp} description={weather.description} />
      <DateAndTime timezone={weather.timezone} />
      <Flag country={weather.country} />
    </div>
  );
}

export default Part1;
