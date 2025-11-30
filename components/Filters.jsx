import React from "react";
import { Link } from "react-router-dom";

const Filters = () => {
  return (
    <section className="filters">
      <div className="container">
        <div className="flex gap-30">
          <h4>Model:</h4>
          <ul className="flex gap-30">
            <li>Single Container</li>
            <li>Side-by-Side Container</li>
            <li>Two-Story Container</li>
          </ul>
        </div>
        <div className="flex gap-30">
          <h4>Room:</h4>
          <ul className="flex gap-30">
            <li>Single Container</li>
            <li>Side-by-Side Container</li>
            <li>Two-Story Container</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Filters;
