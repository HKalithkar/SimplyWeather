import React, { useEffect, useState } from "react";
import { days, months } from "../../../../../functions/MonthsAndDays";

function DateAndTime({ timezone }) {
  const [current, setCurrent] = useState({
    date: "",
    month: "",
    year: "",
    day: "",
    hours: "",
    minutes: "",
    seconds: "",
  });

  useEffect(() => {
    const date = new Date();
    date.setSeconds(date.getSeconds() + timezone);
    const interval = setInterval(() => {
      setCurrent({
        date: date.getUTCDate(),
        month: date.getUTCMonth(),
        year: date.getUTCFullYear(),
        day: date.getUTCDay(),
        hours: date.getUTCHours(),
        minutes: date.getUTCMinutes(),
        seconds: date.getUTCSeconds(),
      });
      date.setSeconds(date.getSeconds() + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="datetime-container">
      <p style={{ fontSize: "3rem" }}>
        {current.hours < 10 ? "0" + current.hours : current.hours} :{" "}
        {current.minutes < 10 ? "0" + current.minutes : current.minutes} :{" "}
        {current.seconds < 10 ? "0" + current.seconds : current.seconds}
      </p>
      <p style={{ fontSize: "1.5rem" }}>
        {days[current.day]} <br />
        {months[current.month]}{" "}
        {current.date < 10 ? "0" + current.date : current.date}, {current.year}
      </p>
    </div>
  );
}

export default DateAndTime;