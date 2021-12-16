import React, { useState } from "react"
import { ListGroup, ListGroupItem, InputGroup, Button, FormControl } from "react-bootstrap"
import dataSource from "../../data"

const Reviews = ({hostel}) => {
  const [reviewerInputValue, setReviewerInputValue] = useState('')
  const [reviewInputValue, setReviewInputValue] = useState('')

  const handleReviewerChange = e => setReviewerInputValue(e.currentTarget.value)
  const handleReviewChange = e => setReviewInputValue(e.currentTarget.value)

  const addReview = (reviewer, review) => {
    const queryText = JSON.stringify(
      {
        'reviewer': reviewer,
        'review': review
      }
    )
    const getHostel = async () => {
      try {
        const response = await fetch(`${dataSource.baseURL}hostels/review/${parseInt(hostel.hostel?.id)}`, {
        method: 'POST',
        headers: dataSource.headers,
        body: queryText
      })
      const data = await response.json()
      hostel.setHostel(data)
      } catch (error) {
        console.error(error)
        return null
      }
    }
    getHostel()
  }

  const handleSubmit = e => {
    e.preventDefault()
    addReview(reviewerInputValue, reviewInputValue)
    setReviewerInputValue('')
    setReviewInputValue('')
  }

  let manufacturedId = 0
  return (
    <>
      <ListGroup>
        {hostel.hostel?.reviews?.map(review => {
          manufacturedId++
          return (
            <ListGroupItem key={manufacturedId}>
              <span className="fw-bold">{review.reviewer}</span> &nbsp; - &nbsp;
              <span className="fst-italic">{review.review}</span>
            </ListGroupItem>
          )
        })}
        <InputGroup className="mb-3">
          <FormControl
            type="text" 
            placeholder="Enter name"
            aria-label="Enter name"
            aria-describedby="basic-addon2"
            value={reviewerInputValue}
            required={true}
            onChange={handleReviewerChange}
            />
          <FormControl
            type="text"
            placeholder="Enter review text"
            aria-label="Enter review text"
            aria-describedby="basic-addon2"
            value={reviewInputValue}
            required={true}
            onChange={handleReviewChange}
          />
          <Button variant="primary" id="button-addon2" onClick={handleSubmit}>
            Post
          </Button>
        </InputGroup>
      </ListGroup>
    </>
  )
}

export default Reviews