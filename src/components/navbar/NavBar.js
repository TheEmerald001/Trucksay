import { React } from "react";
import { Navbar, Button } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { Avatar } from "flowbite-react";
// import { currentUser } from "../login/LogIn"

function NavBar({ currentUser, setCurrentUser }) {
  console.log(currentUser);
  function handleLogOut() {
    setCurrentUser(null);
  }
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <img
            src="https://cdn.worldvectorlogo.com/logos/mercedes-benz-5.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Truck Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Truck Chat
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {currentUser ? (
            <>
              <Avatar
                img={currentUser.image}
                rounded={true}
              />
              <Button onClick={handleLogOut}>Log Out</Button>
            </>
          ) : (
            <Button>
              <NavLink to="/signup">Sign Up</NavLink>
            </Button>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink to="/" active={true}>
            Home
          </NavLink>
          <NavLink to="/AboutUs">About Us</NavLink>
          {currentUser ? (
            <h3>Hello {currentUser.name}</h3>
          ) : (
            <NavLink to="/LogIn">Log in</NavLink>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
