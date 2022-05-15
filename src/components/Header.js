import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

function Header() {
  return (
    <header>
      <Navbar variant="dark">
        <Container className="container">
          <Navbar.Brand
            href="#home"
            className="heading"
            style={{ color: "#fef8e6" }}
          >
            Cake Shop
          </Navbar.Brand>
          <Nav className="nav">
            <Nav.Link
              href="#home"
              className="nav-link"
              style={{ color: "#FEF2D0" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#features"
              className="nav-link"
              style={{ color: "#FAEABC" }}
              variant="dark"
            >
              Features
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              className="nav-link"
              style={{ color: "#FAEABC" }}
            >
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="headline" style={{ color: "beige" }}>
        <h1 className="text">Pure Artistry, Always Fresh</h1>
        <Button className="btn" variant="dark">
          Order now
        </Button>
      </div>
    </header>
  );
}

export default Header;
