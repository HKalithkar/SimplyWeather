import React from "react";

function CityDetails({ weather }) {
  const Detail = ({ name, value }) => {
    return (
      <div className="city-items" key={name}>
        <p>
          <b>{name}</b>:{" "}
        </p>
        <p style={{textAlign: "right"}}>{value}</p>
      </div>
    );
  };
  return (
    <div className="city-container">
      <Detail name="City" value={weather.city} />
      <Detail name="Country" value={weather.country} />
      <Detail name="Latitude" value={weather.lat} />
      <Detail name="Longitude" value={weather.lon} />
      <Detail name="Humidity" value={weather.humidity + "%"} />
      <Detail name="Pressure" value={weather.pressure + " hPa"} />
      <Detail name="Visibility" value={(weather.visibility/1000) + " km"} />
      <Detail name="Wind Speed" value={weather.wind + " mps"} />
    </div>
  );
}

export default CityDetails;
