//Images

import Profile5 from "./Images/Profile5.gif";
import Profile6 from "./Images/Profile6.gif";
import Profile7 from "./Images/Profile7.gif";

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
                <img src={Profile6} alt="Avatar" />
              </div>
              <div backgroundColor="#CB4F32" className="flip-card-back">
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
                <img src={Profile7} alt="Avatar" />
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
