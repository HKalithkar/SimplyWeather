import React from "react";
import CityDetails from "./subComponents/CityDetails";
import "./Part2.css"

function Part2({ weather, forecast }) {
  return (
    <div className="part2-container">
      <CityDetails weather={weather} />
    </div>
  );
}

export default Part2;
