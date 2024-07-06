import React from "react";
import CityDetails from "./subComponents/CityDetails";
import Forecast from "./subComponents/forecast/Forecast";
import "./Part2.css"

function Part2({ weather, forecast }) {
  return (
    <div className="part2-container">
      <CityDetails weather={weather} />
      <Forecast timezone={weather.timezone} forecast={forecast} />
    </div>
  );
}

export default Part2;
