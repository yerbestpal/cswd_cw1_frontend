import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'

const Testimonial = ({ image, quote, name, location, reverse_row }) => {
  return (
    <Row
      className={`py-5 d-flex align-items-center flex-row ${reverse_row ? 'flex-row-reverse' : ''}`}>
      <Col className={'px-5 col-sm-12 col-lg-6 d-flex justify-content-around flex-column'}>
        <blockquote className={'fst-italic fs-4'}>
          "{quote}"
        </blockquote>
        <p><span className="fw-bolder">{name}</span> - {location}</p>
      </Col>
      <Col className={'col-sm-12 col-lg-6 d-flex justify-content-around'}>
        <Image src={image} className="w-50 h-auto" alt="A picture of a user who has gave a testimonial"
               roundedCircle/>
      </Col>
    </Row>
  )
}

export default Testimonial