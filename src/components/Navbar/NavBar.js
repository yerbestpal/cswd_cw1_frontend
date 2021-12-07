import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
            <Link to="/" className="text-decoration-none text-white navbar-brand">North Coast 500</Link>
          <Nav className="me-auto">
              <Link to="/hostels" className="text-decoration-none text-white nav-link">Hostels</Link>
              <Link to="/itinerary" className="text-decoration-none text-white nav-link">Create Itinerary</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar