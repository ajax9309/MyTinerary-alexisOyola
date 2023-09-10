import React from 'react'
import { useParams } from "react-router-dom";
import { getOneCity } from "../../svc/cityQueries.js";

const City = () => {
  const [city, setCity] = useState([]);
  const {id}=useParams()

  useEffect(() => {
    getOneCity(id).then(setCity)
  }, []);
  console.log(city);


  return (
    <section className="container d-flex justify-content-center">
      <h1 className='text-center text-primary'>{city.name}</h1>
      
    </section>
  )
}

export default City
