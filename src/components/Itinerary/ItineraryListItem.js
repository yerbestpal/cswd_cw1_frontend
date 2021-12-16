import React, { useState } from "react"
import { ListGroupItem, Card, Row, Button } from "react-bootstrap"
import ItineraryStage from "./ItineraryStage"
import FeatherIcon from 'feather-icons-react'
import NewItineraryStageDialog from "./NewItineraryStageDialog"

const ItineraryListItem = ({ itinerary, hostels }) => {
  let count = 0
  const itineraryStages = itinerary.stages.map(stage => {
    count++
    return <ItineraryStage key={count} stage={stage}/>
  })

  const [stagesList, setStagesList] = useState(itineraryStages)

  const [showHideNewStageDialog, setShowHideNewStageDialog] = useState()

  const showStageHideButton = () => {
    setShowHideNewStageDialog(nsDialog)
    setShowHideNewStageButton()
  }

  const hideStageShowButton = () => {
    setShowHideNewStageDialog()
    setShowHideNewStageButton(addNewStageBtn)
  }

  const nsDialog = <NewItineraryStageDialog hostels={hostels} 
  stageNum={itineraryStages.length + 1}
  stages={{stagesList, setStagesList}}
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
          <Card.Header>{itinerary.user}</Card.Header>
          <Card.Body>
            <Card.Title>Stages</Card.Title>
            {stagesList}
            {showHideNewStageDialog}
            {showHideNewStageButton}
          </Card.Body>
        </Card>
      </ListGroupItem>
    </>
  )
}

export default ItineraryListItem