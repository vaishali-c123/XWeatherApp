import React from "react";

const Card = ({ name, data }) => {
  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{data}</p>
    </div>
  );
};

export default Card;
