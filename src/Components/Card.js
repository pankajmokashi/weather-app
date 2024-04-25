import React from "react";

function Card({ title, value, unit }) {
  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="value">
        <span>{value} </span>
        <span>{unit}</span>
      </div>
    </div>
  );
}

export default Card;
