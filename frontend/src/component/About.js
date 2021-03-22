//Images
import Dean from "./Images/Dean.jpeg"
import Knight2 from "./Images/Knight2.jpeg"
import card3 from "./Images/Card3.webp"
//Styles
import "../App.css";
import {AboutWrapper,CardWrapper,CardsWrapper,AboutTitleWrapper} from "../styled"

const About = () => {
    return (
<AboutWrapper>
<AboutTitleWrapper> 
<h2>About our Faculty</h2>

</AboutTitleWrapper>
 {/* Cards */}
 <CardsWrapper>
  {/* First Card */}
  <CardWrapper>
  <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={Dean} alt="Avatar" />
    </div>
    <div className="flip-card-back">
      <h2>John Doe</h2> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>
</CardWrapper>

{/* Second card */}
<CardWrapper>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={Knight2} alt="Avatar" />
    </div>
    <div className="flip-card-back">
      <h2>John Doe</h2> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>
</CardWrapper>
{/* Third Card */}
<CardWrapper>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={card3} alt="Avatar" />
    </div>
    <div className="flip-card-back">
      <h2>John Doe</h2> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>
</CardWrapper>
</CardsWrapper>
</AboutWrapper>

    );
  };
  
  export default About;