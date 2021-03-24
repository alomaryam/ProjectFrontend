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
              <h1>H</h1>
            </div>
            <div class="hover">
              <h1>O</h1>
            </div>
            <div class="hover">
              <h1>G</h1>
            </div>
            <div class="hover">
              <h1>W</h1>
            </div>
            <div class="hover">
              <h1>A</h1>
            </div>
            <div class="hover">
              <h1>R</h1>
            </div>
            <div class="hover">
              <h1>T</h1>
            </div>
            <div class="hover">
              <h1></h1>
            </div>
            <div class="hover">
              <h1>S</h1>
            </div>
            <div class="hover">
              <h1>C</h1>
            </div>
            <div class="hover">
              <h1>H</h1>
            </div>
            <div class="hover">
              <h1>O</h1>
            </div>
            <div class="hover">
              <h1>O</h1>
            </div>
            <div class="hover">
              <h1>L</h1>
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
