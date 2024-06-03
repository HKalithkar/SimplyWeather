import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import {
  weatherForecastByCity,
  weatherForecastByCoords,
} from "./functions/MainFunctions";
import Body from "./components/body/Body";

function App() {
  const [location, setLocation] = useState("");
  const [weatherForecast, setWeatherForecast] = useState({
    weather: "",
    forecast: "",
  });
  const { weather, forecast } = weatherForecast;

  useEffect(() => {
    let loc = localStorage.getItem("location");
    if (loc) {
      setLocation(loc);
    } else {
      loc = "Hyderabad";
    }
    weatherForecastByCity(loc, setWeatherForecast, setLocation);
  }, []);

  const handleLocation = (newLocation) => {
    weatherForecastByCity(newLocation, setWeatherForecast, setLocation);
  };

  const currentLocation = (latitude, longitude) => {
    weatherForecastByCoords(
      latitude,
      longitude,
      setWeatherForecast,
      setLocation
    );
  };

  const style = {
    backgroundImage: `url("/${weather.main}.jpg")`,
    backgroundSize: "cover",
    minHeight: "100vh"
  }

  return (
    <div style={style}>
      <Header
        changeLocation={handleLocation}
        currentLocation={currentLocation}
      />
      {weather && (
        <Body weather={weather} forecast={forecast} />
      )}
    </div>
  );
}

export default App;
