//Styles import
// import "./App.css";

import { Route, Switch } from "react-router";

//Component import
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from "./component/About";
import Header from "./component/Header";

//list imports
import CollegeList from "./component/Lists/CollegeList";
import CourseList from "./component/Lists/CourseList";
import StudentList from "./component/Lists/StudentList";

// import CollegeCourse from "./component/Items/CollegeCourse";

//button imports
import AddCollege from "./component/buttons/create/CollegeCreate";
import AddCourse from "./component/buttons/create/CourseCreate";
import AddStudent from "./component/buttons/create/StudentCreate";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Header />
          <About />
        </Route>

        {/* add college  */}

        <Route exact path="/AddCollege">
          <AddCollege />
        </Route>

        {/* college list */}

        <Route exact path="/CollegeList">
          <CollegeList />
        </Route>

        {/* add course */}

        <Route exact path="/AddCourse">
          <AddCourse />
        </Route>

        {/* course list */}

        <Route exact path="/CourseList">
          <CourseList />
        </Route>

        {/* add student */}

        <Route exact path="/AddStudent">
          <AddStudent />
        </Route>

        {/* student list */}

        <Route exact path="/StudentList">
          <StudentList />
        </Route>
      </Switch>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
