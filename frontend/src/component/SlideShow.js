
//React imports
import { useState, useEffect, useRef } from "react";
//Style
import "../App.css";
import {SlideImage} from "../styled"
//Array imports 
import pictures from "./Picture"

const delay = 5000;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {pictures.map((pictures, index) => (
          <SlideImage src={pictures.image} alt="slideshow" className="slide" key={index}  />
        ))}
      </div>

      <div className="slideshowDots">
        {pictures.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;

// const Header = () => {
//     return (

//    <Carousel>
//         <img src={ex1} alt="img1" />
//         <img src={Campus3} alt="img1" />
//         <img src={Campus2} alt="img1" />

//       </Carousel>

//     );
//   };

//   export default Header;
