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
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                className="align-top"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav " />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <Nav.Link>
                <Link className="home" to="/">
                  Home
                </Link>
              </Nav.Link>

              {/* =======================================================Cards */}
              <NavDropdown title="Card Games" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/card-game">Poker Classic</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/card-game">Texas Poker</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/card-game">Domino QQ</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/card-game">Big Two</Link>
                </NavDropdown.Item>
              </NavDropdown>
              {/* ========================================================= Dingdong */}
              <NavDropdown title="Dingdong" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/dingdong">36D</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/dingdong">24D</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/dingdong">12D</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/dingdong">SICBO</Link>
                </NavDropdown.Item>
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
