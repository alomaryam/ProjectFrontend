//Styles import
// import "./App.css";
//Component import
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from "./component/About";
import Header from "./component/Header";
import CollegeList from "./component/Lists/CollegeList";
import CourseList from "./component/Lists/CourseList";
import StudentList from "./component/Lists/StudentList";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <CollegeList />
      <CourseList />
      <StudentList />
      <Footer />
    </div>
  );
}

export default App;
