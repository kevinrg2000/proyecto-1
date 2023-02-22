import "../styles/Card.css";
import { useState } from "react";

export const Card = ({ src, name, grow, width, id }) => {
  return (
    <button
      id={id}
      className="card"
      onClick={(e) => {
        grow(e);
      }}
      style={{ width: width, background: `url(${src})` }}
    >
      <h3>{name}</h3>
    </button>
  );
};
