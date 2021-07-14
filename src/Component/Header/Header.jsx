import React from "react";
import "./Header.css";
import logo from "../../Assets/Image/logo.png";
import {
  Button,
  Card,
  Nav,
  Navbar,
  NavDropdown,
  Container,
} from "react-bootstrap";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="container-header">
          <Navbar.Brand href="/">
            <img src={logo} className="align-top" alt="React Bootstrap logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav " />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>

              {/* =======================================================Cards */}
              <NavDropdown title="Card Games" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/card-game">
                  Poker Classic
                </NavDropdown.Item>
                <NavDropdown.Item href="/card-game">
                  Texas Poker
                </NavDropdown.Item>
                <NavDropdown.Item href="/card-game">Domino QQ</NavDropdown.Item>
                <NavDropdown.Item href="/card-game">Big Two</NavDropdown.Item>
              </NavDropdown>
              {/* ========================================================= Dingdong */}
              <NavDropdown title="Dingdong" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/dingdong">36D</NavDropdown.Item>
                <NavDropdown.Item href="/dingdong">24D</NavDropdown.Item>
                <NavDropdown.Item href="/dingdong">12D</NavDropdown.Item>
                <NavDropdown.Item href="/dingdong">SICBO</NavDropdown.Item>
              </NavDropdown>
              <Button variant="outline-success" style={{ color: "white" }}>
                <Link to="/register">Register</Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
