import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cardcities = ({data}) => {
    const {city,
        image,
        description}=data
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{city}</Card.Title>
          <Card.Text>
            {description}
            {/* {country}
            {language}
            {population}
            {currency} */}
          </Card.Text>
          <Button variant="primary">Discover</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cardcities;
