//Styles imports

import { Navbar } from 'styled-navbar-component';
import { Button } from 'styled-button-component';
import Logo from './Images/logo1.png'

const NavBar = () => {
    return (
   <Navbar>
       <div><Button>LightMode</Button></div>
       <div><img src={Logo} alt="LOGO" height="100px" width="100px"/></div>
       <div>
       <Button>About </Button>
       <Button>College </Button>
       <Button>Students </Button>
       </div>
   </Navbar>
    );
  };
  
  export default NavBar;
  