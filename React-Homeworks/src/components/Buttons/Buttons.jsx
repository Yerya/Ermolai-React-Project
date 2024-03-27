// Buttons.js
import React from 'react';
import "./Buttons.css";

function Button({ buttonInfo, onClick, className }) {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {buttonInfo}
    </button>
  );
}

export default Button;
