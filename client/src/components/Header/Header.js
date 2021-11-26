import React from 'react';
import {Nav, Navbar, Container, Form } from "react-bootstrap"
import { NavLink } from 'react-router-dom';
import { isAuth } from '../../data/Data';
import { userHeader, adminHeader, initHeader } from './HeaderFor';
import './Header.css';


const Header = () => {
 return (
  <Navbar  bg="dark" variant="dark">
    <Container >
    <Navbar.Brand   href="/">Cinema</Navbar.Brand>
    <Nav className="d-flex justify-content-between ">
      
    <Form.Select style={{backgroundColor: "#565E64", color: "#FFF", outline:"none", border:"none" }} >
      <option value="1" style={{color: "#FFF"}} >Minsk</option>
      <option value="2">Gomel</option>
      <option value="3">Brest</option>
    </Form.Select>
     {isAuth.admin ? 
     adminHeader.map((el)=> <NavLink className="link" key={el.id}  to={el.route}>{el.name}</NavLink>) : 
     isAuth.user ? 
     userHeader.map((el)=> <NavLink className="link" key={el.id} to={el.route}>{el.name}</NavLink>) :
     initHeader.map((el)=> <NavLink className="link" key={el.id} to={el.route}>{el.name}</NavLink>) }
    </Nav>
    </Container>
  </Navbar>
 );
};

export default Header;