import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getOneCity } from "../../svc/cityQueries.js";
import { Accordion, Card, CardGroup } from 'react-bootstrap';
import Cardtinerary from "../../components/cardtinerary/Cardtinerary.jsx"
// import { getAllTineraries } from '../../svc/tineraryQueries.js';


const City = () => {
  const [city, setCity] = useState([]);
  const {id}=useParams()

  useEffect(() => {
    getOneCity(id).then(setCity)
  }, []);
  console.log(city)
  
    const [tinerary, setTinerary] = useState([]);
    const {idTinerary}=useParams()
  
     useEffect(() => {
       getAllTineraries(idTinerary).then(setTinerary)
     }, []);  
     console.log(tinerary);


  return (
    <>
    <div className="py-4 d-flex justify-content-center">
      <Card className="shadow col-11 col-sm-10 col-md-8 col-xl-9 col-xxl-10 text-center">
      <Card.Img className='img-fluid opacity-75' src={city.image} alt="cityimg" style={{ height: "300px", objectFit:"cover" }}/>
      <Card.ImgOverlay>
      <Card.Header className='display-5'>{city.country}</Card.Header>
      <Card.Body>
        <Card.Title className='display-6 fw-semibold'>{city.name}</Card.Title>
        <Card.Text className='display-7 lh-base fw-bolder fst-italic'>{city.description}</Card.Text>
      </Card.Body>
      </Card.ImgOverlay>
      <Card.Footer className="text-muted">View more below</Card.Footer>
    </Card>
    </div>
    <div className='d-flex justify-content-center'>
    <Accordion className='col-11 col-sm-10 col-md-8 col-xl-9 col-xxl-10' defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Tineraries</Accordion.Header>
        <Accordion.Body>
        
        <CardGroup>
        {tinerary.length>=0 ? (
        tinerary.map((tinerary)=> <Cardtinerary key={tinerary._id} data={tinerary} />)
        ):(
          <h3>No tineraries yet</h3>
        )}
        
        </CardGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Comments</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </>
  )
}

export default City
