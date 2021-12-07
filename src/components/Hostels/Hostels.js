import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'

const Hostels = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Container>
      <Row>
        <Col className='d-flex align-items-center justify-content-around'>
          <h1>Hostels</h1>
        </Col>
      </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default Hostels