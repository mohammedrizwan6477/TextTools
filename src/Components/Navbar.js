import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const NavbarT = (props) => {
  return (
    <div>
      <Navbar bg={props.mode} variant={props.mode} expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">{props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#">Home</Nav.Link>
              {/* <Nav.Link href="/about">{props.aboutText}</Nav.Link> */}
            </Nav>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <Form.Check
                type="switch"
                id="custom-switch"
                s
                label="Enable Dark Mode"
                onClick={props.toggleMode}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarT;
