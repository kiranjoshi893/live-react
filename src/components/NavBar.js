import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { PropTypes } from 'prop-types'

export default function NavBar(props) {
  return (
    <div>
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand to="#home">{props.sitename}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link to="#home">Home</Nav.Link>
                <Nav.Link to="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item to="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}