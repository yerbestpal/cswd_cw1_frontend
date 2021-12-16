import React, { useState, useEffect } from "react"
import { Card, Button } from "react-bootstrap"
import dataSource from "../../data"

const ItineraryStage = ({ stage }) => {
  const id = stage.hostel
  const [hostel, setHostel] = useState()

  useEffect(() => {
    const fetchedHostel = async () => {
      try {
        const response = await fetch(`${dataSource.baseURL}hostels/${parseInt(id)}`, {
        method: 'GET',
        headers: dataSource.headers
      })
        const json = await response.json()
        setHostel(Object(json)[0])
      } catch (error) {
        console.error(error)
        return null
      }
    }
    fetchedHostel()
  }, [id])

  return (
    <Card bg="secondary" text="light">
      <Card.Header>{stage.stage} - {hostel?.name}</Card.Header>
      <Card.Body>
        <Card.Title>Nights: {stage.nights}</Card.Title>
        <div className="d-flex justify-content-start">
        <Button variant="outline-light">Update</Button>
        &nbsp;
        <Button variant="outline-danger">Delete</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ItineraryStage