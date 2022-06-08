import React from "react";
import "./Game.scss";
import placeholder from "../icons/placeholder.jpeg"

function Game1() {
  return (
    <div className="project-main">
       <div className="game-card-left"> <div className="game-header"><img className="game-icon"
        src={placeholder}
      alt="Logo"
      height={300}
      width={500}
      />
      <h2>Assembly Point</h2> </div>

        <div className="game-text">      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce erat purus, suscipit quis euismod ac, viverra quis sapien. Aenean ac arcu tincidunt, vestibulum nulla a, mattis nisi. Mauris rutrum at libero ut bibendum. Suspendisse ultricies imperdiet metus nec iaculis. Mauris et vehicula tortor. Praesent non purus sit amet velit cursus tristique quis sit amet dolor. Etiam commodo semper est a viverra. Integer vel diam bibendum, viverra diam ac, luctus magna. Suspendisse tellus nulla, feugiat non orci id, sodales molestie eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer eget quam et diam convallis tristique sed sagittis lorem. Vivamus finibus suscipit pharetra.</p>
</div></div>
      
    </div>
  );
}

export default Game1;