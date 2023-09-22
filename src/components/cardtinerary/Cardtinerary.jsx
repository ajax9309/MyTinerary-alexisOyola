import React from 'react'
import { Card } from 'react-bootstrap'

const Cardtinerary = (tinerary) => {
  return (
    
      <Card >
        <Card.Img variant="top" src={tinerary.image} />
        <Card.Body>
          <Card.Title>{tinerary.tinerary}</Card.Title>
          <Card.Text>
            Price: {tinerary.price}
          </Card.Text>
          <Card.Text>
            Duration: {tinerary.duration}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="m-0 p-0 btn btn-tertiary stretched-link">
          <small className="text-muted">Tap to view more</small>
        </Card.Footer>
      </Card>
    
  )
}

export default Cardtinerary
