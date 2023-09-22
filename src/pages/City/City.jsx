import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneCity } from "../../svc/cityQueries.js";
import { Accordion, Card, CardGroup } from "react-bootstrap";
import Cardtinerary from "../../components/cardtinerary/Cardtinerary.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  cities,
  cityTineraries,
  clearCity,
  getCity,
} from "../../redux/actions/cityAction.js";
// import { getAllTineraries } from '../../svc/tineraryQueries.js';

const City = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  let cardcity;
  let loadTinerary = [];
  let showTinerary;

  

  useEffect(() => {
    dispatch(getCity(id));
    dispatch(cities());
    dispatch(cityTineraries());
    return () => dispatch(clearCity());
  }, [id, dispatch]);
  const cityStorage = useSelector((store) => store.citiesReducer.city);
  const tineraryStorage = useSelector((store) => store.citiesReducer.tineraries);
  const allcities = useSelector((store) => store.citiesReducer.allcities);
  //  console.log(tinerary);

  for (const item of tineraryStorage) {
    for (otheritem of allcities) {
      if (otheritem._id === item.city) {
        loadTinerary.push(item);
      }
    }
  }

  cardcity = (
    <>
      <Card.Img
        className="img-fluid opacity-75"
        src={cityStorage.image}
        alt="cityimg"
        style={{ height: "300px", objectFit: "cover" }}
      />
      <Card.ImgOverlay></Card.ImgOverlay>
      <Card.Header className="display-5">{cityStorage.country}</Card.Header>
      <Card.Body>
        <Card.Title className="display-6 fw-semibold">
          {cityStorage.name}
        </Card.Title>
        <Card.Text className="display-7 lh-base fw-bolder fst-italic">
          {cityStorage.description}
        </Card.Text>
      </Card.Body>
    </>
  );

  let matchTineraries = [];
  matchTineraries = loadTinerary.filter(
    (tinerary) =>
      cityStorage && cityStorage._id && tinerary.city === cityStorage._id
  );

  if (matchTineraries.length > 0) {
    showTinerary = matchTineraries.map((tinerary) => (
      <CardGroup>
        <Cardtinerary key={tinerary._id} data={tinerary} />
      </CardGroup>
    ));
  }

  return (
    <>
      <div className="py-4 d-flex justify-content-center">
        <Card className="shadow col-11 col-sm-10 col-md-8 col-xl-9 col-xxl-10 text-center">
          {cardcity}
          <Card.Footer className="text-muted">View more below</Card.Footer>
        </Card>
      </div>
      <div className="d-flex justify-content-center">
        <Accordion
          className="col-11 col-sm-10 col-md-8 col-xl-9 col-xxl-10"
          defaultActiveKey="0"
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Tineraries</Accordion.Header>
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Comments</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default City;
