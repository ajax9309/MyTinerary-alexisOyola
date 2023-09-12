import React from 'react'
import { Card } from 'react-bootstrap'

const Cardtinerary = ({data}) => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.tinerary}</Card.Title>
          <Card.Text>
            <p>Price: {data.price}</p>
            <p>Price: {data.duration}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default Cardtinerary
