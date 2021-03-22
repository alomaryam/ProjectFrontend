import styled from "styled-components";

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
export const FooterDiv = styled.div`
  width: 99vw;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
`;

export const ContentDiv = styled.div`
  p {
    text-align: center;
    padding-top: 100px;
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
  display: grid;
  background-color: #f0f0f0;
  padding-bottom: 20px;
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
  background-color: #011936;
  color: white;
  text-align: center;
  font-size: 40pt;
  padding: 50px;
`;
export const SlideWrapper = styled.div`
  background-color: #011936;
  padding: 50px;
  padding-bottom: 60px;
`;

//blue: #047ab9
