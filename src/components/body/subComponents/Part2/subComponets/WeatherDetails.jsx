import React from "react";

function WeatherDetails({ weather }) {
  const WeatherItem = ({name, value}) => (
    <div className="weather-item">
      <p>{name}: </p>
      <p>{value}</p>
    </div>
  );

  return (
    <div className="weather-container">
      <WeatherItem name="City" value={weather.city} />
      <WeatherItem name="Country" value={weather.country} />
      <WeatherItem name="Latitude" value={weather.lat} />
      <WeatherItem name="Longitude" value={weather.lon} />
      <WeatherItem name="Pressure (in hPa)" value={weather.pressure} />
      <WeatherItem name="Humidity (in %)" value={weather.humidity} />
    </div>
  );
}

export default WeatherDetails;
