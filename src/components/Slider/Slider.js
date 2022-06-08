import React, { useState } from "react";
import Game1 from "../../GameList/Game1";
import { useSpring, animated } from "react-spring";
import "./Slider.scss";

function Slider() {
  let sliderArr = [
    <Game1 />,
    <Game1/>
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
          LEFT
        </button>
        <button id="goRight" onClick={goRight}>
          RIGHT
        </button>
      </div>
    </animated.div>
  );
}

export default Slider;