import React, { useEffect, useRef, useState } from "react";
import { arrowVisibility, handleArrow } from "../../../../../../../functions/ForecastFunctions";

function ThreeHour({ forecast }) {
  const threeHourRef = useRef(null);
  const [visibility, setVisibility] = useState(false);
  let i = 0;

  useEffect(() => {
    const sizeObserver = new ResizeObserver(() => {
      arrowVisibility(threeHourRef, setVisibility);
    });
    if (threeHourRef.current) {
      sizeObserver.observe(threeHourRef.current);
      arrowVisibility(threeHourRef, setVisibility);
    }

    threeHourRef.current.scrollTo({
      left: 0,
      behaviour: 'smooth'
    })

    return () => sizeObserver.disconnect();
  }, [forecast]);

  const HourCard = ({ data }) => {
    const dt = new Date(data.date);
    const hours = dt.getHours() < 10 ? "0" + dt.getHours() : dt.getHours();
    const minutes = dt.getMinutes() < 10 ? "0" + dt.getMinutes() : dt.getMinutes();

    return (
      <div className="hour-card">
        <p style={{fontSize: "1.25rem"}}>Time - {hours} : {minutes}</p>
        <p className="hour-temp">{Math.round(data.temp - 273)}&deg;C</p>
        <p>{data.description}</p>
      </div>
    )
  };

  return (
    <div className="three-hour">
      <div onClick={() => handleArrow(-150, threeHourRef)} className={visibility ? "arrows" : "hidden arrows"}>
        <h2>&lt;</h2>
      </div>
      <div ref={threeHourRef} className="three-hour-cards">
        {forecast.map((item) => (<HourCard key={++i} data={item} />))}
      </div>
      <div onClick={() => handleArrow(150, threeHourRef)} className={visibility ? "arrows" : "hidden arrows"}>
        <h2>&gt;</h2>
      </div>
    </div>
  );
}

export default ThreeHour;
