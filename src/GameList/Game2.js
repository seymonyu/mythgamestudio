import React from "react";
import "./Game.scss";
import game_icon from "../icons/game_icons/assembly_point.png"
import assembly_point_iphone from "../images/assembly_point_iphone.png"


function Game2() {
  return (
    <div className="project-main">
       <div className="game-card-left"> <div className="game-header"><img className="game-icon"
        src={game_icon}
      alt="Logo"
      />
      <h2 className="game-title">Assembly Point</h2> </div>

        <div className="game-text">      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce erat purus, suscipit quis euismod ac, viverra quis sapien. Aenean ac arcu tincidunt, vestibulum nulla a, mattis nisi. Mauris rutrum at libero ut bibendum. Suspendisse ultricies imperdiet metus nec iaculis. Mauris et vehicula tortor. Praesent non purus sit amet velit cursus tristique quis sit amet dolor. Etiam commodo semper est a viverra. Integer vel diam bibendum, viverra diam ac, luctus magna. </p>
</div></div>

<div className="game-card-right"> <img className="game-phone"
        src={assembly_point_iphone}
      alt="Logo"
      height={400}
      /></div>
      
    </div>
  );
}

export default Game2;