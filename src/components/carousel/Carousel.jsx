
import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from 'react'


//hardcoded array de imagenes para prueba de Carousel
const images = ['https://images.pexels.com/photos/1054417/pexels-photo-1054417.jpeg',
                'https://images.pexels.com/photos/4589325/pexels-photo-4589325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'https://images.pexels.com/photos/5116269/pexels-photo-5116269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              ]




const Carousel = () => {

  // boton siguiente>next
  const [index, setIndex] = useState(0)
  const next = () => {
    if (index < images.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }

  }

  // boton previo<previus
  const prev = () => {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(images.length - 1)
    }
  }
  
  // indicador de cursor en slide 
  const setPointer = (indice) => {
    setIndex(indice)
  }

  useEffect(() => {
    let intervalID = setInterval(() => {
      
      setIndex((pre) => pre + 1)
      
      // prev()
      // Pasa a la anterior imagen en loop
      // next()
    }, 1000)

    return () => {
      clearInterval(intervalID)
    }

  }, [index])




  return (
    <></>
  )
}

export default Carousel
