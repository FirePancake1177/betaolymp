import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function NavBar() {
  return (
    <div className="Nav">
      <Navbar bg="light" expand="sm" fixed="top" className="main-navbar shadow rounded">
        <Navbar.Brand className="h1 main">
          <div className="name">Olympus</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" exact className="nav-link link" activeClassName="now">Главная</NavLink>
            <NavLink to="/olymp" exact className="nav-link link" activeClassName="now">Университеты</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;