//Styles imports

// import { Navbar } from 'styled-navbar-component';
import { Navbar } from "../styled";
import { Button } from "styled-button-component";
import Logo from "./Images/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar>
      <div>
        <Link to="/">
          <img src={Logo} alt="LOGO" height="100px" width="100px" />
        </Link>
      </div>
      <div>
        <Link to="/CollegeList">
          <Button>Colleges </Button>
        </Link>
        <Link to="/CourseList">
          <Button>Courses </Button>
        </Link>
        <Link to="StudentList">
          <Button>Students </Button>
        </Link>
      </div>
    </Navbar>
  );
};

export default NavBar;
