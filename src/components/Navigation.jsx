import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

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
          <Nav.Link disabled>Disable</Nav.Link>
        </Nav>
        <Form className='d-flex' role='search'>
          <FormControl type='search' placeholder='Search' aria-label='Search' className='me-2' />
          <Button variant='outline-success' type='submit'>
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
