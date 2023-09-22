import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

const NavbarMain = () => {
  return (
    <div>
      <Navbar expand="lg" className="" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/Home" >MyTineraries</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink >
                <Link className="m-1" to="/Home" >Home</Link>
                <Link className="m-1" to="/Cities">Cities</Link>
                <Link className="m-1" to="/SignUp">SignUp</Link>
                <Link className="m-1" to="/SignIn">SignIn</Link>
              </NavLink>
              <NavLink></NavLink>      
            </Nav>
          </Navbar.Collapse>
          <Link className="btn btn-outline-info m-1" to="/SignIn"><BsPersonCircle/></Link>
        </Container>
      </Navbar>
      
    </div>
  );
};

export default NavbarMain;
