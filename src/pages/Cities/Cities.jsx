import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import MainLayout from '../../layouts/MainLayout'
import axios from 'axios';
import Cardcities from '../../components/cardcities/cardcities';

const Cities = () => {
  const params=useParams()
  // console.log(params);
  const [cities, setCities]=useState([])
  useEffect(()=>{
    axios('http://localhost:3000/api/cities')
    .then(res=>setCities(res.data.response))
    

  },[])

  return (
    <MainLayout>
    
    <div className='img-fluid rounded mx-auto d-block m-3' src="https://previews.123rf.com/images/jakarin2521/jakarin25211804/jakarin2521180400005/98543408-concept-of-under-construction-website-graphic-of-construction-site-with-industrial-crane.jpg" alt="undercontruction">
      {/* {
        cities.map(city=> <Cardcities keys={city._id} data={city} />)
      }
      <Cardcities/> */}
    </div>
    </MainLayout>
  )
}

export default Cities