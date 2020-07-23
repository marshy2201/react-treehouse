import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import SearchStudent from './SearchStudent';

const NavbarComp = ({ onSearch }) => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand as={Link} to="/" className="border-right border-secondary pr-4">
        <img src={logo} id="treehouse-logo" alt="Treehouse Logo" />
        <span className="ml-4">Home</span>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
      </Nav>
      <SearchStudent onSearch={onSearch} />
    </Container>
  </Navbar>
);

export default NavbarComp;