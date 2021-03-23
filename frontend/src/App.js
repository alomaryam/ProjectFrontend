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

        <Route path="/AddCollege">
          <AddCollege />
        </Route>

        {/* college list */}

        <Route path="/CollegeList">
          <CollegeList />
        </Route>

        {/* add course */}

        <Route path="/AddCourse">
          <AddCourse />
        </Route>

        {/* course list */}

        <Route path="/CourseList">
          <CourseList />
        </Route>

        {/* add student */}

        <Route path="/AddStudent">
          <AddStudent />
        </Route>

        {/* student list */}

        <Route path="/StudentList">
          <StudentList />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
