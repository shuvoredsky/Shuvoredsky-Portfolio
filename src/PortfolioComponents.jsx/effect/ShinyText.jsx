import React from "react";
import "./ShinyText.css";

const ShinyText = ({ text, className = "", speed = 3 }) => {
  return (
    <span
      className={`shiny-text ${className}`}
      style={{ animationDuration: `${speed}s` }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
