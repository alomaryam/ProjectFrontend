//Styles import
import "./App.css";

//Component import
import Navbar from "./component/Navbar";
import Slideshow from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      <Footer />
    </div>
  );
}

export default App;
