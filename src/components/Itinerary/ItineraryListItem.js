import React, { useState } from "react"
import { ListGroupItem, Card, Row, Button, Accordion } from "react-bootstrap"
import ItineraryStage from "./ItineraryStage"
import FeatherIcon from 'feather-icons-react'
import NewItineraryStageDialog from "./NewItineraryStageDialog"

const ItineraryListItem = ({ itinerary }) => {
  const [newItinerary, setNewItinerary] = useState(itinerary)
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
          <Card.Header>{newItinerary.user}</Card.Header>
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