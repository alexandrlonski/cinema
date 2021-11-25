// import Button from '@restart/ui/esm/Button';
import React from 'react';
import {Nav, Navbar, Container, Form, Button } from "react-bootstrap"
import { ABOUTUS_ROUTE, FILMS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';



const NavbarTop = () => {
 return (
  <Navbar className="mb-3" mt="5" bg="dark" variant="dark">
    <Container >
    <Navbar.Brand   href="/">Cinema</Navbar.Brand>
    <Nav className="d-flex justify-content-between ">
      
    <Form.Select >
      <option value="1">Minsk</option>
      <option value="2">Gomel</option>
      <option value="3">Brest</option>
    </Form.Select>
      <Nav.Link  href={FILMS_ROUTE}>Afisha</Nav.Link>
      <Nav.Link  href={ABOUTUS_ROUTE}>About</Nav.Link>
      <Button variant="secondary" size="lg " href={LOGIN_ROUTE} active>LogIn</Button>
      <Button variant="secondary" size="lg " href={REGISTRATION_ROUTE}
     className="ms-2" active>Registration</Button>
    </Nav>
    </Container>
  </Navbar>
 );
};

export default NavbarTop;