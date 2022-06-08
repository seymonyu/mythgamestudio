import React from "react";
import "./Game.scss";
import logo from "../icons/logo.png";

function Game1() {
  return (
    <div className="project-main">
     

      <img className="game_icon"
      src={logo}
      alt="Logo"
height={300}
width={500}
      />
      <div className="color-overlay">
        <div className="project-link-container">
          <a
            className="project-link"
            href="https://github.com/legyta/AnimalsWhoRead"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            className="project-link"
            href="https://sissythepanda.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WEBSITE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Game1;