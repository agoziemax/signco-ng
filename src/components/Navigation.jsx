import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg='body-tertiary' expand='lg'>
      <Navbar.Toggle aria-controls='navbarTogglerDemo01' />
      <Navbar.Collapse id='navbarTogglerDemo01'>
        <Navbar.Brand href='#'>Hidden brand</Navbar.Brand>
        <Nav className='me-auto mb-2 mb-lg-0'>
          <Nav.Link href='#' active>
            Home
          </Nav.Link>
          <Nav.Link href='#'>Link</Nav.Link>
          <Nav.Link disabled>Disabled</Nav.Link>
        </Nav>
        <div className='sliding-text-container'>{/* Sliding text animation */}</div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
