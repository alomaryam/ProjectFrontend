//Styles import
import "./App.css";
import {SlideWrapper} from "./styled"
//Component import
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from "./component/About"
import Header from "./component/Header";


function App() {
  return (
    <div className="App">
      <Navbar />
      <SlideWrapper>
     <Header/>
      </SlideWrapper>
      <SlideWrapper>
      <About/>
      </SlideWrapper>
      <Footer />
    </div>
  );
}

export default App;
