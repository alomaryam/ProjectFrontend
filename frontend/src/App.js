//Styles import
import "./App.css";

//Component import
import Navbar from "./component/Navbar";
import Slideshow from "./component/Header";
import Footer from "./component/Footer";
import {SlideWrapper} from "./styled"

function App() {
  return (
    <div className="App">
      <Navbar />
      <SlideWrapper>
      <Slideshow />
      </SlideWrapper>
      <Footer />
    </div>
  );
}

export default App;
