import React from 'react'
import { Card } from 'react-bootstrap'

const Cardtinerary = ({data}) => {
  return (
    
      <Card >
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.tinerary}</Card.Title>
          <Card.Text>
            Price: {data.price}
          </Card.Text>
          <Card.Text>
            Duration: {data.duration}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="m-0 p-0 btn btn-tertiary stretched-link">
          <small className="text-muted">Tap to view more</small>
        </Card.Footer>
      </Card>
    
  )
}

export default Cardtinerary
