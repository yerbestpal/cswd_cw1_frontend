import React from 'react'
import Footer from '../Footer/Footer'
import { Container, Row, Col } from 'react-bootstrap'

const Itinerary = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Container>
        <Row>
          <Col className='d-flex align-items-center justify-content-around'>
            <h1>Create an Itinerary</h1>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default Itinerary