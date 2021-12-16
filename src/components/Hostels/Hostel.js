import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import dataSource from '../../data'
import { Loader } from '@googlemaps/js-api-loader'
import RatingsChart from "../Chart/Chart"

const Hostel = ({ hostels }) => {
  const { id } = useParams()
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

  const loader = new Loader({
    apiKey: "AIzaSyBrsOFep2m3K44kjGWk7esMjfhhXkVR37k",
    version: "weekly",
    libraries: ["places"]
  })

  const location = hostel?.location
  const lat = location?.lat
  const long = location?.long
  
  const mapOptions = {
    center: {
      lat: Number(lat),
      lng: Number(long)
    },
    zoom: 17
  }

  loader
  .load()
  .then(google => {
    new google.maps.Map(document.getElementById('map'), mapOptions);
  })
  .catch(e => console.log(e))

  return (
    <>
    {/* address, description, email, id, location, name, phone, postcode, ratings, reviews, avgRatings */}
    <Container className="py-5">
      <Row>
        <Col className="d-flex justify-content-center justify-content-around">
        <h1 className="pt-5">{hostel?.name}</h1>
        </Col>
      </Row>
      <Row className="py-5">
        <Col className="col-sm-12 col-md-6">
          <p>{hostel?.description}</p>
        </Col>
        <Col className="col-sm-12 col-md-6">
          <h3>Contact</h3>
          <a href={`mailto: ${hostel?.email}`}>{hostel?.email}</a>
          <p>{hostel?.phone}</p>
        </Col>
      </Row>
      <Row className="py-5">
        <Col className="col-sm-12 col-md-6">
          <h3>Location</h3>
          <p>{hostel?.address}</p>
          <p>{hostel?.postcode}</p>
        </Col>
          <Col id="map" className="col-sm-12 col-md-6" style={{width:'50%',height:'400px'}}>
        </Col>
      </Row>
      <RatingsChart hostel={{hostel, setHostel}}/>
    </Container>
    </>
  )
}

export default Hostel