import React from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import HostelListItem from './HostelListItem'

const Hostels = ({ hostels }) => {
  console.log(hostels)
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Container>
      <Row>
        <Col className='d-flex align-items-center justify-content-around'>
          <h1>Hostels</h1>
        </Col>
      </Row>
      <ListGroup>
        {hostels.map(hostel => <HostelListItem key={hostel.id} hostel={hostel}/>)}
      </ListGroup>
      </Container>
      <Footer/>
    </div>
  )
}

export default Hostels