import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";

//erroras nes yra linkas linke. px dbr.
function Navigation() {
    return(
        //i Nav.Link props imetam , va tokia sintaxe Link componenta Routeriui
        <Navbar bg="light" expand="sm">
            <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/todotable">To do list</Nav.Link>
                    <Nav.Link as={Link} to="/converter">Converter</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Navigation

