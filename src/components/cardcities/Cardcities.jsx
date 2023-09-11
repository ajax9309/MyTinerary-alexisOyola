import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


const Cardcities = ({data}) => {
    const {
      name,
      image,
      description}=data
  return (
    <div className="pb-2 pt-3 col-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-2">
      <Card className="shadow bg-body-tertiary" style={{ width: "18rem",}}>
        <Card.Img className="card-img" variant="top" src={image} style={{ height: "200px", objectFit:"cover" }}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="">
            {description}
          </Card.Text>
          <Link className="btn btn-primary stretched-link" to={`/City/${data._id}`}>Discover</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cardcities;
