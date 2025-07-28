// components/Button.js
import React from "react";

export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`text-lightYellow font-helvetica-neue-bold font-bold text-2xl cursor-pointer transition-colors ${className}`}
    >
      {children} 
    </button>
  );
}
