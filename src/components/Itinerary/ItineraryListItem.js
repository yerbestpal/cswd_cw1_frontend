import React, { useState } from "react"
import { ListGroupItem, Card, Row, Button, Accordion } from "react-bootstrap"
import ItineraryStage from "./ItineraryStage"
import FeatherIcon from 'feather-icons-react'
import NewItineraryStageDialog from "./NewItineraryStageDialog"
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { parseISO, format, toDate } from 'date-fns'
import dataSource from "../../data"

const ItineraryListItem = ({ itinerary }) => {
  const [newItinerary, setNewItinerary] = useState(itinerary)
  let d = new Date(newItinerary.startdate)
  let finalDate = toDate(d)
  const [startDate, setStartDate] = useState(finalDate)
  let count = 0

  const [showHideNewStageDialog, setShowHideNewStageDialog] = useState()

  const showStageHideButton = () => {
    setShowHideNewStageDialog(nsDialog)
    setShowHideNewStageButton()
  }

  const hideStageShowButton = () => {
    setShowHideNewStageDialog()
    setShowHideNewStageButton(addNewStageBtn)
  }

  const updateDate = (date) => {
    const getItinerary = async () => {
      const d = date.toString()
      try {
        const response = await fetch(`${dataSource.baseURL}itineraries/startdate/${newItinerary.user}/${d}`, {
        method: 'GET',
        headers: dataSource.headers
      })
      const data = await response.json()
      setNewItinerary(data)
      setStartDate(date)
      } catch (error) {
        console.error(error)
        return null
      }
    }
    getItinerary()
  }

  const nsDialog = <NewItineraryStageDialog 
  itinerary={{ newItinerary, setNewItinerary }}
  stageNum={newItinerary.stages.length + 1}
  hideStageShowButton={() => hideStageShowButton()}
/>
  
  const addNewStageBtn = (
    <Row className="my-2 mx-1">
      <Button variant="outline-primary" onClick={() => showStageHideButton()}><FeatherIcon icon="plus" size="18"/></Button>
    </Row>
  )

  const [showHideNewStageButton, setShowHideNewStageButton] = useState(addNewStageBtn)


  return (
    <>
      <ListGroupItem>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div>{newItinerary.user}</div>
            <div><ReactDatePicker selected={startDate} onChange={(date) => updateDate(date)} /></div>
          </Card.Header>
          <Card.Body>
            <Card.Title>Stages</Card.Title>
              <Accordion defaultActiveKey="0">
                {newItinerary.stages.map(stage => {
                  count++
                  return <ItineraryStage key={count} stage={stage} eventKey={count} itinerary={{ newItinerary, setNewItinerary }}/>
                })}
              </Accordion>
            {showHideNewStageDialog}
            {showHideNewStageButton}
          </Card.Body>
        </Card>
      </ListGroupItem>
    </>
  )
}

export default ItineraryListItem