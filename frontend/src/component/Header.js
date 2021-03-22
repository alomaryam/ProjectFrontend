//Style
import "../App.css";
import { TitleStyled, SlideWrapper } from "../styled";
//Slideshow imports
import Slideshow from "./SlideShow";

const Header = () => {
  return (
    <div>
      <TitleStyled>
        <h1> Monster University</h1>
      </TitleStyled>

      <SlideWrapper>
        <Slideshow />
      </SlideWrapper>
    </div>
  );
};

export default Header;
