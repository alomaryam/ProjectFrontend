//Styles import
// import "./App.css";
//Component import
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from "./component/About";
import Header from "./component/Header";
import CollegeList from "./component/Lists/CollegeList"

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <CollegeList/>
      <Footer />
    </div>
  );
}

export default App;
