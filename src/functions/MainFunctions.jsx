const API_Key = "34ad9642e840bae58817eeee514dca64";

const getData = async (
  weatherURL,
  forecastURL,
  setWeatherForecast,
  setLocation
) => {
  const weatherResponse = await fetch(weatherURL);
  const forecastResponse = await fetch(forecastURL);

  const weatherData = await weatherResponse.json();
  if (weatherData.cod === "404") {
    alert("City not found");
    return;
  }
  const weather = {
    lon: weatherData.coord.lon,
    lat: weatherData.coord.lat,
    main: weatherData.weather[0].main,
    description: weatherData.weather[0].description,
    temp: weatherData.main.temp,
    pressure: weatherData.main.pressure,
    humidity: weatherData.main.humidity,
    country: weatherData.sys.country,
    timezone: weatherData.timezone,
    city: weatherData.name,
    wind: weatherData.wind.speed,
    visibility: weatherData.visibility
  };

  const forecastData = await forecastResponse.json();
  const temp = forecastData.list;
  const forecast = temp.map((data) => {
    const date = new Date(data.dt_txt);
    date.setSeconds(date.getSeconds() + weather.timezone);
    return {
      temp: data.main.temp,
      main: data.weather[0].main,
      description: data.weather[0].description,
      date: date
    };
  });

  setWeatherForecast({
    weather: weather,
    forecast: forecast
  });

  localStorage.setItem("location", weather.city);
  setLocation(weatherData.name);
};

const weatherForecastByCity = (location, setWeatherForecast, setLocation) => {
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_Key}`;
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_Key}`;
  getData(weatherURL, forecastURL, setWeatherForecast, setLocation);
};

const weatherForecastByCoords = (
  latitude,
  longitude,
  setWeatherForecast,
  setLocation
) => {
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_Key}`;
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_Key}`;
  getData(weatherURL, forecastURL, setWeatherForecast, setLocation);
};

export { weatherForecastByCity, weatherForecastByCoords };
