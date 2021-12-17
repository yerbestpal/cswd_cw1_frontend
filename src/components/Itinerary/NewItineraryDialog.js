import React, { useState, useEffect } from "react"
import { Card, Button, Row, FloatingLabel, Form, Col, InputGroup } from "react-bootstrap"
import dataSource from "../../data"
import FeatherIcon from 'feather-icons-react'

const NewItineraryDialog = ({ setItineraries, hideItineraryShowButton }) => {
  const [validated, setValidated] = useState(false)
  const [userInputValue, setUserInputValue] = useState('')

  const handleUserChange = e => setUserInputValue(e.currentTarget.value)

  const handleValidation = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      setValidated(true)
    }
  }

  const [itin, setItin] = useState([])

  useEffect(() => {
    const fetchedItineraries = async () => {
      try {
        const response = await fetch(`${dataSource.baseURL}itineraries`, {
        method: 'GET',
        headers: dataSource.headers
      })
        const json = await response.json()
        setItin(json)
      } catch (error) {
        console.error(error)
        return null
      }
    }
    fetchedItineraries()
  }, [])

  const addItinerary = () => {
    const getItinerary = async () => {
      try {
        const response = await fetch(`${dataSource.baseURL}itineraries/new/${userInputValue}`, {
        method: 'GET',
        headers: dataSource.headers
      })
      const data = await response.json()
      setItineraries([...itin, data])
      } catch (error) {
        console.error(error)
        return null
      }
    }
    getItinerary()
  }

  const handleSubmit = e => {
    e.preventDefault()
    addItinerary()
    hideItineraryShowButton()
  }

  return (
    <Card bg="light" text="dark" className="my-2">
      <Card.Header className="d-flex justify-content-between">
        <div>New Itinerary</div> 
        <div><FeatherIcon as='button' icon="x" size="18" onClick={() => hideItineraryShowButton()}/>
        </div></Card.Header>
      <Card.Body>
        <Form noValidate validated={validated} onInput={handleValidation}>
          <Row className="g-2">
            <Form.Group as={Col} className="col-md-6">
              <InputGroup hasValidation>
                <FloatingLabel controlId="floatingInputGrid" label="Enter your name" required>
                  <Form.Control required type="text" placeholder="e.g. Ross" onChange={handleUserChange} isInvalid />
                </FloatingLabel>
              </InputGroup>
            </Form.Group>
            <div className="d-flex justify-content-start mt-3">
              <Button variant="secondary" onClick={validated ? handleSubmit : null}>Create Itinerary</Button>
            </div>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default NewItineraryDialog