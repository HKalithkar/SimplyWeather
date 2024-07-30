import React, { useEffect, useRef, useState } from "react";
import { months } from "../../../../../../../functions/MonthsAndDays";
import {
  handleArrow,
  handleBtn,
  arrowVisibility,
} from "../../../../../../../functions/ForecastFunctions";

function DateSlider({ today, selectDate }) {
  const [days, setDays] = useState([]);
  const [buttonStyle, setButtonStyle] = useState(["btn-style", "", "", "", ""]);
  const [visibility, setVisibility] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const data = [];
    for (let i = 2; i < 5; i++) {
      const temp = new Date(today);
      temp.setDate(temp.getDate() + i);
      data.push({
        date: months[temp.getUTCMonth()] + " " + temp.getUTCDate(),
        index: i,
      });
    }
    setDays(data);
    selectDate(0);

    const sizeObserver = new ResizeObserver(() => {
      arrowVisibility(sliderRef, setVisibility);
    });
    if (sliderRef.current) {
      sizeObserver.observe(sliderRef.current);
      arrowVisibility(sliderRef, setVisibility);
    }
    handleBtn(0, setButtonStyle, selectDate, sliderRef);

    return () => sizeObserver.disconnect();
  }, [today]);

  return (
    <div className="date-slider">
      <div
        onClick={() => handleArrow(-150, sliderRef)}
        className={visibility ? "arrows" : "hidden arrows"}
      >
        <h2>&lt;</h2>
      </div>
      <div ref={sliderRef} className="date-slider-options">
        <button
          className={buttonStyle[0]}
          onClick={() => handleBtn(0, setButtonStyle, selectDate, sliderRef)}
        >
          <h3>Today</h3>
        </button>
        <button
          className={buttonStyle[1]}
          onClick={() => handleBtn(1, setButtonStyle, selectDate, sliderRef)}
        >
          <h3>Tomorrow</h3>
        </button>
        {days.map((day) => (
          <button
            className={buttonStyle[day.index]}
            onClick={() =>
              handleBtn(day.index, setButtonStyle, selectDate, sliderRef)
            }
            key={day.index}
          >
            <h3>{day.date}</h3>
          </button>
        ))}
      </div>
      <div
        onClick={() => handleArrow(150, sliderRef)}
        className={visibility ? "arrows" : "hidden arrows"}
      >
        <h2>&gt;</h2>
      </div>
    </div>
  );
}

export default DateSlider;