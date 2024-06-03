import React, { useState } from "react";
import {
  getCurrentLocation,
  handleInput,
} from "../../functions/HeaderFunctions";
import "./Header.css";

function Header({ changeLocation, currentLocation }) {
  const [place, setPlace] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    changeLocation(place);
    setPlace("");
  };

  return (
    <div className="header-container">
      <div className="header-logo">
        <h1>SimplyWeather</h1>
      </div>
      <div className="header-form">
        <form onSubmit={handleFormSubmit}>
          <input
            name="search"
            type="text"
            value={place}
            onChange={(event) => handleInput(event, setPlace)}
            placeholder="Enter City"
            required
          />
          <button className="btn" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="current-location">
        <button
          className="btn"
          onClick={() => getCurrentLocation(currentLocation)}
        >
          <span className="current-location-text">
            Switch to Current Location
          </span>
          <span className="current-location-symbol">
            <img src="/location.svg" alt="Current Location" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Header;
