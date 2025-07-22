// components/Button.js
import React from "react";

export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`text-lightYellow text-[19px] font-bold cursor-pointer transition-colors ${className}`}
    >
      {children} 
    </button>
  );
}
