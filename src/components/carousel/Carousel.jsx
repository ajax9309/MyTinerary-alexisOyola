// import "../carousel/carousel.css";
import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';


//hardcoded array de imagenes para prueba de Carousel

const recipes = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4589325/pexels-photo-4589325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5116269/pexels-photo-5116269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/18192217/pexels-photo-18192217/free-photo-of-ciudad-amanecer-puesta-de-sol-panorama-urbano.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/18184225/pexels-photo-18184225/free-photo-of-punto-de-referencia-panorama-urbano-rascacielos-viaje.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/18126909/pexels-photo-18126909/free-photo-of-ciudad-punto-de-referencia-edificio-religion.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2236674/pexels-photo-2236674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];


const Maincarousel= ()=> {
  const reduceRecipes = (acc, cur, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(cur);
    return acc;
  };

  return (
    <Carousel>
      {recipes.reduce(reduceRecipes, []).map((item, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center p-2">
            {item.map((item, index) => {
              return (
                <Card key={index} className="shadow pb-3 m-1" style={{ width: 350}} >
                  <Card.Img
                    variant="top"
                    src={item + 1}
                    style={{height:250,objectFit:"cover"}}
                  />
                </Card>
              );
            })}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
    // <div className="">
    // <Carousel fade>
    //   <Carousel.Item interval={2500}>
    //     <img className="img-fluid d-block w-100" text="First slide" src="https://images.pexels.com/photos/1054417/pexels-photo-1054417.jpeg"/>
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item interval={2500}>
    //     {/* <ExampleCarouselImage text="Second slide" /> */}
    //     <img className="img-fluid d-block w-100" text="Second slide" src="https://images.pexels.com/photos/4589325/pexels-photo-4589325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item interval={2500}>
    //     {/* <ExampleCarouselImage text="Third slide" /> */}
    //     <img className="img-fluid d-block w-100" text="Third slide" src="https://images.pexels.com/photos/5116269/pexels-photo-5116269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
    // </div>  
 

export default Maincarousel;
