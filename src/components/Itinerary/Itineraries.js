import React, { useEffect, useState } from "react"
import { Container, Row, Col, InputGroup, FormControl, ListGroup } from "react-bootstrap"
import dataSource from "../../data"
import Footer from "../Footer/Footer"
import FeatherIcon from 'feather-icons-react'
import ItineraryListItem from "./ItineraryListItem"

const Itineraries = () => {
  const [itineraries, setItineraries] = useState([])
  const [searchString, setSearchString] = useState('')

  useEffect(() => {
    const fetchedItineraries = async () => {
      try {
        const response = await fetch(`${dataSource.baseURL}itineraries`, {
        method: 'GET',
        headers: dataSource.headers
      })
        const json = await response.json()
        setItineraries(json)
      } catch (error) {
        console.error(error)
        return null
      }
    }
    fetchedItineraries()
  }, [])

  let count = 0
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Container className="py-5">
        <Row>
          <Col className='d-flex align-items-center justify-content-around'>
            <h1 className="pt-5">Itineraries</h1>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex align-items-center justify-content-around'>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><FeatherIcon icon="book-open" size="18"/></InputGroup.Text>
              <FormControl
                placeholder="Enter a user's name"
                aria-label="Enter a user's name"
                aria-describedby="basic-addon1"
                type='text'
                onChange={e => setSearchString(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>
        <ListGroup>
          {itineraries.filter(itinerary => {
            if (searchString === '') {
              return itinerary
            } else if (itinerary.user.toLowerCase().includes(searchString.toLowerCase())) {
              return itinerary
            } else {
              return null
            }
          }).map(itinerary => {
            count++
            return <ItineraryListItem className='hostelListItem' key={count} itinerary={itinerary} itineraries={{ itineraries, setItineraries }}/>
          })}
        </ListGroup>
      </Container>
      <Footer/>
  </div>
  )
}

export default Itineraries