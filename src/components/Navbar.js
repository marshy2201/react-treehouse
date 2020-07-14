import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../logo.svg';

const NavbarComp = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home" className="border-right border-secondary pr-4">
        <img src={logo} id="treehouse-logo" alt="Treehouse Logo" />
        <span className="ml-4">Home</span>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#features">Treehouse Students</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default NavbarComp;