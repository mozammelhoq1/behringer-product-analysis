import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="info" expand="lg" sticky="top" className="mb-5">
      <Container fluid>
        <Navbar.Brand href="#" className=" fw-bold text-dark fs-1">
          Sound Guys
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              to="/home"
              className="text-decoration-none fw-bold text-dark mx-3 my-2"
            >
              HOME
            </Link>
            <Link
              to="/reviews"
              className="text-decoration-none fw-bold text-dark mx-3 my-2"
            >
              REVIEWS
            </Link>
            <Link
              to="/dashboard"
              className="text-decoration-none fw-bold text-dark mx-3 my-2"
            >
              DASHBOARD
            </Link>
            <Link
              to="/blogs"
              className="text-decoration-none fw-bold text-dark mx-3 my-2"
            >
              BLOGS
            </Link>
            <Link
              to="/about"
              className="text-decoration-none fw-bold text-dark mx-3 my-2"
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
