import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

const NavbarMain = () => {
  return (
    <div>
      <Navbar expand="lg" className="" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">MyTinerary</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/Cities">Cities</Link>

              <Nav.Link href="#">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarMain;
