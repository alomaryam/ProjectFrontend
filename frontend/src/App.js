//Styles import
import "./App.css";
//Component import
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from "./component/About";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
