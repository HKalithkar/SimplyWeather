const handleInput = (event, setPlace) => {
  const value = event.target.value;
  setPlace(value);
};

const getCurrentLocation = (currentLocation) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        currentLocation(latitude, longitude);
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.error("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            console.error("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            console.error("The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
            console.error("An unknown error occurred.");
            break;
          default:
            console.error("An unspecified error occurred.");
        }
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
};

export {handleInput, getCurrentLocation}