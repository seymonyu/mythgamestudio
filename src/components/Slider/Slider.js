import React, { useState } from "react";
import Game1 from "../../GameList/Game1";
import Game2 from "../../GameList/Game2";
import Game3 from "../../GameList/Game3";
import { useSpring, animated } from "react-spring";
import arrow_left from "../../icons/arrow_left.png"
import arrow_right from "../../icons/arrow_right.png"
import "./Slider.scss";

function Slider() {
  let sliderArr = [
    <Game1 />,
    <Game2/>,
    <Game3/>
  ];
  const [x, setX] = useState(0);
  const props = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    from: { opacity: 0 },
  });
  const goLeft = () => {
    x === 0 ? setX(-110 * (sliderArr.length - 1)) : setX(x + 110);
  };
  const goRight = () => {
    x === -110 * (sliderArr.length - 1) ? setX(0) : setX(x - 110);
  };
  return (
    <animated.div style={props}>
      <div className="slider-main">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              className="slide-item"
              style={{ transform: `translateX(${x}%)` }}
            >
              {item}
            </div>
          );
        })}

        <button id="goLeft" onClick={goLeft}>
          
          <img  
                src={arrow_left}
            
                alt="Logo"
                height={60}/>
        </button>
        <button id="goRight" onClick={goRight}>
        <img  
                src={arrow_right}
            
                alt="Logo"
                height={60}/>
        </button>
      </div>
    </animated.div>
  );
}

export default Slider;