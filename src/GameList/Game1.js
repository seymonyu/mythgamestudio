import React from "react";
import "./Game.scss";
import placeholder from "../icons/placeholder.jpeg"
import iphone from "../images/iphone.png"


function Game1() {
  return (
    <div className="project-main">
       <div className="game-card-left"> <div className="game-header"><img className="game-icon"
        src={placeholder}
      alt="Logo"
      height={300}
      width={500}
      />
      <h2 className="game-title">Assembly Point</h2> </div>

        <div className="game-text">      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce erat purus, suscipit quis euismod ac, viverra quis sapien. Aenean ac arcu tincidunt, vestibulum nulla a, mattis nisi. Mauris rutrum at libero ut bibendum. Suspendisse ultricies imperdiet metus nec iaculis. Mauris et vehicula tortor. Praesent non purus sit amet velit cursus tristique quis sit amet dolor. Etiam commodo semper est a viverra. Integer vel diam bibendum, viverra diam ac, luctus magna. </p>
</div></div>

<div className="game-card-right"> <img className="game-phone"
        src={iphone}
      alt="Logo"
      height={400}
      /></div>
      
    </div>
  );
}

export default Game1;