import React from "react"
import { Card, Button, Row, FloatingLabel, Form, Col } from "react-bootstrap"
import dataSource from "../../data"
import FeatherIcon from 'feather-icons-react'

const NewItineraryStageDialog = ({ stageNum, hostels, stages, hideStageShowButton }) => {
  return (
    <Card bg="light" text="dark" className="my-2">
      <Card.Header className="d-flex justify-content-between">
        <div>New Stage ({parseInt(stageNum)})</div> 
        <div><FeatherIcon as='button' icon="x" size="18" onClick={() => hideStageShowButton()}/>
        </div></Card.Header>
      <Card.Body>
        <Form>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Duration of nights">
                <Form.Control required={true} type="text" placeholder="1, 2, 3..." />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelectGrid" label="Select a Hostel">
                <Form.Select required={true} aria-label="Floating label select example">
                  {hostels.map(hostel => <option value={hostel.id} hostel={hostel}>{hostel.name}</option>)}
                </Form.Select>
              </FloatingLabel>
            </Col>
            <div className="d-flex justify-content-start mt-3">
              <Button variant="secondary">Add Stage</Button>
            </div>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default NewItineraryStageDialog