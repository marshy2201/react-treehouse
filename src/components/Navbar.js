import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../logo.svg';
import SearchStudent from './SearchStudent';

const NavbarComp = ({ onSearch }) => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home" className="border-right border-secondary pr-4">
        <img src={logo} id="treehouse-logo" alt="Treehouse Logo" />
        <span className="ml-4">Home</span>
      </Navbar.Brand>
      <SearchStudent onSearch={onSearch} />
    </Container>
  </Navbar>
);

export default NavbarComp;