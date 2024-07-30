import React, { useEffect, useState } from "react";
import DateSlider from "./subComponents/DateSlider";
import ThreeHour from "./subComponents/ThreeHour";

function Forecast({ timezone, forecast }) {
  const [today, setToday] = useState();
  const [selectedForecast, setSelectedForecast] = useState([]);

  const selectDate = (num) => {
    const date = new Date();
    date.setSeconds(date.getSeconds() + timezone);
    date.setDate(date.getDate() + num);
    const data = forecast.filter((item) => {
      const newDate = new Date(item.date);
      return (date.getUTCDate() === newDate.getDate() && date.getUTCMonth() === newDate.getMonth());
    });
    setSelectedForecast(data);
  }

  useEffect(() => {
    const date = new Date();
    date.setSeconds(date.getSeconds() + timezone);
    setToday(date);
  }, [timezone, forecast]);

  return (
    <div className="forecast">
      <DateSlider today={today} selectDate={selectDate}/>
      <ThreeHour forecast={selectedForecast} />
    </div>
  );
}

export default Forecast;
