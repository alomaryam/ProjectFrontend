//Images

import Profile5 from "./Images/Profile5.gif";
import Profile6 from "./Images/Profile6.gif";
import Profile7 from "./Images/Profile7.gif";
import Profile8 from "./Images/yellow.gif";

//Styles
import "../App.css";
import {
  AboutWrapper,
  CardWrapper,
  CardsWrapper,
  AboutTitleWrapper,
} from "../styled";

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
                <img src={Profile5} alt="Avatar" />
              </div>
              <div className="flip-card-back1">
                <h2>The Grey Lady</h2>
                <p>Ravenclaw House</p>
              </div>
            </div>
          </div>
        </CardWrapper>

        {/* Second card */}
        <CardWrapper>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Profile6} alt="Avatar" />
              </div>
              <div className="flip-card-back2">
                <h2>Nearly Headless Nick</h2>
                <p>Gryffindor House</p>
              </div>
            </div>
          </div>
        </CardWrapper>
        {/* Third Card */}
        <CardWrapper>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Profile7} alt="Avatar" />
              </div>
              <div className="flip-card-back3">
                <h2>The Bloody Baron</h2>
                <p>Slytherin House</p>
              </div>
            </div>
          </div>
        </CardWrapper>
        <CardWrapper>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Profile8} alt="Avatar" />
              </div>
              <div className="flip-card-back4">
                <h2>The Fat Friar</h2>
                <p>The Hufflepuff House</p>
              </div>
            </div>
          </div>
        </CardWrapper>
      </CardsWrapper>
    </AboutWrapper>
  );
};

export default About;
