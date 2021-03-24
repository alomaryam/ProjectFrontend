import styled from "styled-components";
import Door from "./component/Images/Door2.gif";
import BackgroundAbout from "./component/Images/backgroundabout.jpeg";
import BackgroundAbout2 from "./component/Images/BackgroundAbout2.jpeg";

export const Background = styled.div`
  background-image: url(${Door});
  height: 830px;
  max-width: 100%;
  padding-top: 130px;
  background-size: cover;
`;

export const ADDWrapper = styled.div`
  width: 500px;
  height: 500px;
  padding: 20px;
  margin-right: 45%;
  margin-left: 30%;
  justify-items: center;
  text-justify: center;
  justify-content: center;
  background-color: #0b132b;
  align-content: center;
  padding-top: 40px;
  padding-bottom: 100px;
  display: grid;
  h2 {
    font-size: 20pt;
    justify-content: center;
    text-align: center;
    padding-bottom: 10px;
    color: white;
  }
  input {
    justify-content: center;
    padding: 15pt;
    width: 100%;
    margin-bottom: 50px;
  }
`;

export const ButtonWrapper = styled.div`
  /* 
  margin-right: 45%;
  /* margin-left: 30%; */
  justify-items: center;
  text-justify: center;
  justify-content: center;
  align-content: center;
`;

/* button {
    padding: 10px;
    font-size: 10pt;
    color: white;
    background-color: #6c757d;
    text-decoration: none;
    justify-items: center;
    text-align: center; 
    justify-content: center;
    align-content: center;
    margin: auto; */

export const DeleteWrapper = styled.div`
  display: flex;
  float: right;
`;
export const Button = styled.a`
  padding: 10px;
  font-size: 20pt;
  color: white;
  background-color: black;
  text-decoration: none;
  float: right;
`;

export const DeleteButton = styled.button`
  font-size: 20pt;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  border-color: red;
  border-radius: 100%;
  background-color: red;
  float: right;
`;

export const A = styled.a`
  color: white;
  text-decoration: none;
`;

export const Navbar = styled.nav`
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  color: rgba(0, 0, 0, 0.5);
  border-color: rgba(0, 0, 0, 0.1);
  background-color: #f0f0f0 !important;
`;

export const List = styled.div`
  /* background-color: #a9d6e5; */
  border-color: #0b132b;
  border-width: 10px;
  border-style: solid;
  margin-top: 10pt;
  margin-bottom: 10px;
  width: 90%;
  padding: 50px;
  display: block;
`;

export const MiniList = styled.div`
  background-color: #0b132b;
  color: white;
  margin-top: 10pt;
  margin-bottom: 10px;
  width: 90%;
  padding: 50px;
  display: block;
`;

export const FooterDiv = styled.div`
  width: 100%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
`;

export const ContentDiv = styled.div`
  p {
    text-align: center;
  }
`;
// export const SlideWrapper=styled.div`
// left:100%;
// height:500px;
// width:99vw;
// display:flex;
// justify-content:center;
// `;
export const AboutWrapper = styled.div`
  width: 100vw;
  height: 500px;
  align-content: space-between;
  overflow: scroll;
  display: grid;
  /* background-color: #0b132b; */
  background-image: url(${BackgroundAbout2});
  color: white;
  padding-bottom: 20px;
  border-bottom: solid;
  border-color: white;
`;

export const CardWrapper = styled.div`
  margin-top: 10px;
  -webkit-justify-content: space-between;

  padding: 30px;
  img {
    height: 100%;
    width: 100%;
  }
`;
export const CardsWrapper = styled.div`
  margin-left: 200px;
  margin-right: 200px;
  justify-content: space-between;
  display: flex;
`;
export const AboutTitleWrapper = styled.div`
  text-align: center;
  display: block;
  align-content: center;
`;

export const SlideImage = styled.img`
  height: 450px;
`;
export const TitleStyled = styled.div`
  background-color: #0b132b;
  border-bottom: solid;
  border-color: white;
  color: white;
  text-align: center;
  font-size: 25pt;
  /* margin-top:100px; */
  /* margin-bottom:500px; */
  /* padding: 150px; */
`;
export const SlideWrapper = styled.div`
  /* background-color: #0b132b; */
  background-image: url(${BackgroundAbout});
  /* background-color: #0b132b; */
  /* background-color: #2c2f26; */
  padding: 50px;
  padding-bottom: 60px;
  border-bottom: solid;
  border-color: white;
`;

//blue: #047ab9
