import React, { useState } from 'react'
import { Col, Container, ListGroup, Row, InputGroup, FormControl } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import HostelListItem from './HostelListItem'
import FeatherIcon from 'feather-icons-react'

const Hostels = ({ hostels }) => {
  const [searchString, setSearchString] = useState('')
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Container>
      <Row>
        <Col className='d-flex align-items-center justify-content-around'>
          <h1>Hostels</h1>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex align-items-center justify-content-around'>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><FeatherIcon icon="home" size="18"/></InputGroup.Text>
            <FormControl
              placeholder="Enter a hostel's address"
              aria-label="Enter a hostel's address"
              aria-describedby="basic-addon1"
              type='text'
              onChange={e => setSearchString(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>
      <ListGroup>
        {hostels.filter(hostel => {
          if (searchString === '') {
            return hostel
          } else if (hostel.address.toLowerCase().includes(searchString.toLowerCase())) {
            return hostel
          } else {
            return null
          }
        }).map(hostel => <HostelListItem className='hostelListItem' key={hostel.id} hostel={hostel}/>)}
      </ListGroup>
      </Container>
      <Footer/>
    </div>
  )
}

export default Hostels