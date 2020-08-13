import React from "react";
import { Link } from "react-router-dom";
import "./snake.css";
import "./snake23.gif";
// import { Link } from "react-router-dom";

const Snake = () => {
  return (
    <div>
      <h1 className="Abouttitle">
        <Link to="/Projects" className="link">
          Projects/
        </Link>
        Snake
      </h1>
      <div className="centerfb">
        <div className="snake">
          <img src={require("./snake23.gif")} alt="loading..." />
          <a
            href="https://www.snakeplay.netlify.app"
            rel="noopener noreferrer"
            target="_blank"
            className="snakebtn"
          >
            Play Online
          </a>
        </div>
      </div>
    </div>
  );
};

export default Snake;
