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
          <Navbar.Brand href="/">MyTinerary</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">      
              <Nav.Link href="/">Home</Nav.Link>
              <Link to="/Cities">Cities</Link>
            </Nav>
          </Navbar.Collapse>
          <Button variant="outline-info"><BsPersonCircle/></Button>
        </Container>
      </Navbar>
      
    </div>
  );
};

export default NavbarMain;
