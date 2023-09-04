// import "../carousel/carousel.css";
import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";

//import ExampleCarouselImage from 'components/ExampleCarouselImage';


//hardcoded array de imagenes para prueba de Carousel
const images = [
  "https://images.pexels.com/photos/1054417/pexels-photo-1054417.jpeg",
  "https://images.pexels.com/photos/4589325/pexels-photo-4589325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5116269/pexels-photo-5116269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Maincarousel= ()=> {
  // // boton siguiente>next
  // const [index, setIndex] = useState(0);
  // const next = () => {
  //   if (index < images.length - 1) {
  //     setIndex(index + 1);
  //   } else {
  //     setIndex(0);
  //   }
  // };

  // // boton previo<previus
  // const prev = () => {
  //   if (index > 0) {
  //     setIndex(index - 1);
  //   } else {
  //     setIndex(images.length - 1);
  //   }
  // };

  // // indicador de cursor en slide
  // const setPointer = (indice) => {
  //   setIndex(indice);
  // };

  // useEffect(() => {
  //   let intervalID = setInterval(() => {
  //     setIndex((pre) => pre + 1);

  //     // prev()
  //     // Pasa a la anterior imagen en loop
  //     // next()
  //   }, 1000);

  //   return () => {
  //     clearInterval(intervalID);
  //   };
  // }, [index]);

  return (
    <div className="">
    <Carousel fade>
      <Carousel.Item interval={2500}>
        <img className="img-fluid d-block w-100" text="First slide" src="https://images.pexels.com/photos/1054417/pexels-photo-1054417.jpeg"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img className="img-fluid d-block w-100" text="Second slide" src="https://images.pexels.com/photos/4589325/pexels-photo-4589325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img className="img-fluid d-block w-100" text="Third slide" src="https://images.pexels.com/photos/5116269/pexels-photo-5116269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>  
  )
    
  
};

export default Maincarousel;
