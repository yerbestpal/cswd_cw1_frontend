import React from "react"
import { Card } from "react-bootstrap"

const StageCard = ({ h, avgRating, stage }) => {
  return (
    <Card bg="secondary" text="light" className="my-3">
      <Card.Header>{stage.stage} - {h?.name}</Card.Header>
      <Card.Body>
        <Card.Title>Nights: {stage.nights}</Card.Title>
        <Card.Text>{h?.address}</Card.Text>
        <Card.Text>{h?.postcode}</Card.Text>
        <Card.Title>Contact</Card.Title>
        <Card.Text>{h?.email}</Card.Text>
        <Card.Text>{h?.phone}</Card.Text>
        <Card.Text>{'⭐️ '.repeat(avgRating)}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default StageCard