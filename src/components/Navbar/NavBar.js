import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">North Coast 500</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Hostels</Nav.Link>
          <Nav.Link href="#features">Create Itinerary</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar