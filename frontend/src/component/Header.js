//Style
// import "../App.css";
import "../title.scss";
import { TitleStyled, SlideWrapper } from "../styled";
//Slideshow imports
import Slideshow from "./SlideShow";

const Header = () => {
  return (
    <div>
      <TitleStyled>
        <div class="main-content">
          <div class="concept concept-two">
            <div class="hover">
              <h1></h1>
            </div>
            <div class="hover">
              <h1>M</h1>
            </div>
            <div class="hover">
              <h1>O</h1>
            </div>
            <div class="hover">
              <h1>N</h1>
            </div>
            <div class="hover">
              <h1>S</h1>
            </div>
            <div class="hover">
              <h1>T</h1>
            </div>
            <div class="hover">
              <h1>E</h1>
            </div>
            <div class="hover">
              <h1>R</h1>
            </div>
            {/* <div class="hover">
          <h1></h1>
        </div>  */}

            <div class="hover">
              <h1>U</h1>
            </div>
            <div class="hover">
              <h1>N</h1>
            </div>
            <div class="hover">
              <h1>I</h1>
            </div>
            <div class="hover">
              <h1>V</h1>
            </div>
            <div class="hover">
              <h1>E</h1>
            </div>
            <div class="hover">
              <h1>R</h1>
            </div>
            <div class="hover">
              <h1>T</h1>
            </div>
            <div class="hover">
              <h1>Y</h1>
            </div>
          </div>
        </div>
      </TitleStyled>

      <SlideWrapper>
        <Slideshow />
      </SlideWrapper>
    </div>
  );
};

export default Header;
