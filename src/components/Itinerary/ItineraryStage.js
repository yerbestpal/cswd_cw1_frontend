import React, { useState, useEffect } from "react"
import { Button, Accordion } from "react-bootstrap"
import dataSource from "../../data"
import UpdateStageDialog from '../Itinerary/UpdateItineraryStageDialog'
import StageCard from "./StageCard"

const ItineraryStage = ({ itinerary, stage, eventKey }) => {
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

  const deleteStage = () => {
    const getItinerary = async () => {
      try {
        const response = await fetch(`${dataSource.baseURL}itineraries/stages/delete/${itinerary.newItinerary.user}/${stage.stage}`, {
        method: 'GET',
        headers: dataSource.headers
      })
      const data = await response.json()
      itinerary.setNewItinerary(data)
      } catch (error) {
        console.error(error)
        return null
      }
    }
    getItinerary()
  }

  const sum = hostel?.ratings.reduce((a, b) => a + b, 0)
  const avg = (sum / hostel?.ratings.length) || 0

  const Buttons = () => (
    <div className="d-flex justify-content-start">
      <Button variant="outline-warning" onClick={() => showUpdate()}>Update</Button>
      &nbsp;
      <Button variant="outline-danger" onClick={() => deleteStage()}>Delete</Button>
    </div>
  )

  const stageCard = <StageCard h={hostel} avgRating={avg} stage={stage}/>

  const [showHideUpdateStageDialog, setShowHideUpdateStageDialog] = useState()
  const [showHideButtons, setShowHideButtons] = useState(Buttons)

  const hideUpdate = () => {
    setShowHideUpdateStageDialog()
    setShowHideButtons(Buttons)
  }

  const showUpdate = () => {
    setShowHideUpdateStageDialog(updateStageDialog)
    setShowHideButtons()
  }

  const updateStageDialog = () => 
  <UpdateStageDialog hideUpdate={() => hideUpdate()} stageNum={stage.stage} itinerary={itinerary}/>

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{stage.stage} - {hostel?.name}</Accordion.Header>
      <Accordion.Body>
        {stageCard}
        {showHideUpdateStageDialog}
        {showHideButtons}
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default ItineraryStage