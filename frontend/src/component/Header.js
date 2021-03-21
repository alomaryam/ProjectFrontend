import Carousel from 'nuka-carousel';
import ex1 from "./Images/ex1.jpeg"
import Campus2 from "./Images/Campus2.png"
import Campus3 from "./Images/Campus3.jpeg"


// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
// const delay = 2500;

const Header = () => {
    return (
 
   <Carousel>
        <img src={ex1} alt="img1" />
        <img src={Campus3} alt="img1" />
        <img src={Campus2} alt="img1" />
        
      </Carousel>
     
      
   
    );
  };
  
  export default Header;
// import React from "react"
// import "../App.css"

//  export const Header = () => {
//   const [index, setIndex] = React.useState(0);
//   const timeoutRef = React.useRef(null);

//   function resetTimeout() {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }

//   React.useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setIndex((prevIndex) =>
//           prevIndex === colors.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [index]);

//   return (
//     <div className="slideshow">
//       <div
//         className="slideshowSlider"
//         style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
//       >
//         {colors.map((backgroundColor, index) => (
//           <div
//             className="slide"
//             key={index}
//             style={{ backgroundColor }}
//           ></div>
//         ))}
//       </div>

//       <div className="slideshowDots">
//         {colors.map((_, idx) => (
//           <div
//             key={idx}
//             className={`slideshowDot${index === idx ? " active" : ""}`}
//             onClick={() => {
//               setIndex(idx);
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ReactDOM.render(<Slideshow />, document.getElementById("App"));
