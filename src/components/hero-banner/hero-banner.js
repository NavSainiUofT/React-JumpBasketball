import "./hero-banner.css";
import React, {useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar as NavbarBs,
  Container,
  Nav,
  Button,
  Dropdown,
  NavDropdown,
  Row,
  Col
} from "react-bootstrap";

export function Hero(props){
      return (
        <Container>
            <div>
            <Row>
                <Col>
                <h1>{props.title}</h1>
                </Col>
            </Row>
            <Row>
            <p>{props.description}</p>
            </Row>
            </div>
        </Container>
      );
    }
  