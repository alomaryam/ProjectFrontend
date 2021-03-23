//Styles import
// import "./App.css";
//Component import
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from "./component/About";
import Header from "./component/Header";

//list imports
import CollegeList from "./component/Lists/CollegeList";
import CourseList from "./component/Lists/CourseList";
import StudentList from "./component/Lists/StudentList";

//button imports
import AddCollege from "./component/buttons/create/CollegeCreate";
import AddCourse from "./component/buttons/create/CourseCreate";
import AddStudent from "./component/buttons/create/StudentCreate";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <AddCollege />
      <CollegeList />
      <AddCourse />
      <CourseList />
      <AddStudent />
      <StudentList />
      <Footer />
    </div>
  );
}

export default App;
