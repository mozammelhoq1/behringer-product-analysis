import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
const NavigationBar = () => {
  return (
    <Navbar bg="primary" expand="lg" sticky="top" className="mb-5">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            <Link
              to="/home"
              className="text-decoration-none fw-bold text-light mx-3 my-2"
            >
              HOME
            </Link>
            <Link
              to="/reviews"
              className="text-decoration-none fw-bold text-light mx-3 my-2"
            >
              REVIEWS
            </Link>
            <Link
              to="/dashboard"
              className="text-decoration-none fw-bold text-light mx-3 my-2"
            >
              DASHBOARD
            </Link>
            <Link
              to="/blogs"
              className="text-decoration-none fw-bold text-light mx-3 my-2"
            >
              BLOGS
            </Link>
            <Link
              to="/about"
              className="text-decoration-none fw-bold text-light mx-3 my-2"
            >
              ABOUT
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
