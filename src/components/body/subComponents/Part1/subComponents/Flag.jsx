import React from "react";

function Flag({ country }) {
  const imgURL = `https://flagcdn.com/h240/${country.toLowerCase()}.png`;

  return (
    <div className="flag-container">
      <img src={imgURL} alt="Country Flag" height="200px" border="5" />
    </div>
  );
}

export default Flag;
