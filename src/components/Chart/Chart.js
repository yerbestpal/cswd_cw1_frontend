import React from "react"
import { Dropdown, DropdownButton } from "react-bootstrap"
import dataSource from "../../data"
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'
import { Row, Col } from "react-bootstrap"

const RatingsChart = ({ hostel }) => {
  const addRating = (rating) => {
    const getHostel = async () => {
      try {
        const response = await fetch(`${dataSource.baseURL}hostels/rate/${parseInt(hostel.hostel?.id)}/${parseInt(rating)}`, {
        method: 'GET',
        headers: dataSource.headers
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

  const getDistributedRatings = rating => {
    let count = 0
    hostel.hostel?.ratings?.forEach(r => r === rating && count++)
    return count
  }

  const data = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
      {
        id: 1,
        label: 'Occurence of Ratings',
        data: [
          getDistributedRatings(1),
          getDistributedRatings(2),
          getDistributedRatings(3),
          getDistributedRatings(4),
          getDistributedRatings(5)
        ],
      }
    ],
  }

  return (
    <Row>
      <Col className="col-sm-12 col-md-6">
        <Bar data={data} width={100} height={50} options={{
            title: {
              display: true,
              text: 'Occurence of Ratings'
            },
            legend: {
              display: true,
              position: 'center'
            }}}/>
      </Col>
      <Col className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
        <DropdownButton id="dropdown-basic-button" title="Add Rating">
          <Dropdown.Item onClick={() => addRating(1)}>1</Dropdown.Item>
          <Dropdown.Item onClick={() => addRating(2)}>2</Dropdown.Item>
          <Dropdown.Item onClick={() => addRating(3)}>3</Dropdown.Item>
          <Dropdown.Item onClick={() => addRating(4)}>4</Dropdown.Item>
          <Dropdown.Item onClick={() => addRating(5)}>5</Dropdown.Item>
        </DropdownButton>
      </Col>
    </Row>
  )
}

export default RatingsChart