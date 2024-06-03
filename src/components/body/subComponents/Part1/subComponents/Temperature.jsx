import React from "react";

function Temperature(props) {
  return (
    <div className="temp-container">
      <h3>
        {props.city.toUpperCase()}, {props.country}
      </h3>
      <div>
        <p style={{ fontSize: "3rem" }}>{Math.round(props.temp - 273)}&deg;C</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Temperature;
