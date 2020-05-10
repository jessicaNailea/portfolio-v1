import React from "react";
import "./hero.scss";
import "font-awesome/css/font-awesome.min.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">Jessica Buenfil</h1>
      <div className="hero-list-container">
        <ul className="hero-ul">
          <li>
            <span>React Js Developer</span>
          </li>
          <li>
            <span>Node Js Developer</span>
            <i className="fab fa-react"></i>
          </li>
          <li>
            <span>Cyber Security</span>
            <i className="fab fa-node-js"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Hero };
