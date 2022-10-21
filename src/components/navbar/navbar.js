import "./navbar.css";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar as NavbarBs, Container, Nav, Button, Dropdown, NavDropdown } from "react-bootstrap";

export class Navbar extends Component {
  render() {
    return (
      <>
        <NavbarBs sticky="top" className="bg-light shadow-sm mb-3">
          <Container>
            <Nav className="me-auto navigation">
            <Nav.Link className="navigation-item" to={"/"} as={NavLink}>
            <img className="navigation-item" src={require("../../imgs/cropped-logo.png")} />
            </Nav.Link>
              <Nav.Link className="navigation-item" to={"/"} as={NavLink}>
                Home
              </Nav.Link>
              <Nav.Link className="navigation-item" to={"/about"} as={NavLink}>
                About
              </Nav.Link>
              <Nav.Link className="navigation-item" to={"/contact"} as={NavLink}>
                Contact
              </Nav.Link>
              <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </Nav>
          </Container>
        </NavbarBs>      
      </>
    );
  }
}
