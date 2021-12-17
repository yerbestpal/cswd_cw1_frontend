import React, { useState, useEffect } from "react"
import { Card, Button, Row, FloatingLabel, Form, Col } from "react-bootstrap"
import dataSource from "../../data"
import FeatherIcon from 'feather-icons-react'

const UpdateStageDialog = ({ itinerary, stageNum, stages, hideUpdate }) => {
  console.log(itinerary)
  const [hostels, setHostels] = useState([])
  const [durationInputValue, setDurationInputValue] = useState('')
  const [hostelInputValue, setHostelInputValue] = useState('')

  const handleDurationChange = e => setDurationInputValue(e.currentTarget.value)
  const handleHostelChange = e => setHostelInputValue(e.currentTarget.value)

  const updateStage = (hostelId, nights) => {
    const queryText = JSON.stringify(
      {
        'hostel': hostelId,
        'nights': nights
      }
    )
    const getItinerary = async () => {
      try {
        const response = await fetch(`${dataSource.baseURL}itineraries/stages/update/${itinerary.user}/${stageNum}`, {
        method: 'POST',
        headers: dataSource.headers,
        body: queryText
      })
      const data = await response.json()
      itinerary.setItinerary(data)
      } catch (error) {
        console.error(error)
        return null
      }
    }
    getItinerary()
  }

   const handleSubmit = e => {
     e.preventDefault()
     updateStage(hostelInputValue, durationInputValue)
     hideUpdate()
   }

  useEffect(() => {
    const fetchedHostels = async () => {
      try {
        const response = await fetch(`${dataSource.baseURL}hostels`, {
        method: 'GET',
        headers: dataSource.headers
      })
        const json = await response.json()
        setHostels(json)
      } catch (error) {
        console.error(error)
        return null
      }
    }
    fetchedHostels()
  }, [])
  return (
    <Card bg="light" text="dark" className="my-2">
      <Card.Header className="d-flex justify-content-between">
        <div>New Stage ({parseInt(stageNum)}) - {itinerary.user}</div> 
        <div><FeatherIcon as='button' icon="x" size="18" onClick={() => hideUpdate()}/>
        </div></Card.Header>
      <Card.Body>
        <Form>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Duration of nights">
                <Form.Control required={true} type="text" placeholder="1, 2, 3..." onChange={handleDurationChange} />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelectGrid" label="Select a Hostel">
                <Form.Select required={true} aria-label="Floating label select example" onChange={handleHostelChange}>
                  {hostels.map(hostel => <option value={hostel?.id} key={hostel?.id} hostel={hostel}>{hostel?.name}</option>)}
                </Form.Select>
              </FloatingLabel>
            </Col>
            <div className="d-flex justify-content-start mt-3">
              <Button variant="secondary" onClick={handleSubmit}>Update Stage</Button>
            </div>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default UpdateStageDialog