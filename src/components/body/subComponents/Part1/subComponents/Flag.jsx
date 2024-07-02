import React from "react";

function Flag({ country }) {
  const imgURL = `https://flagcdn.com/h240/${country.toLowerCase()}.png`;

  return (
    <div className="flag-container">
      <img src={imgURL} alt="Country Flag" style={{height: "200px", maxWidth: "300px"}} border="2" />
    </div>
  );
}

export default Flag;
