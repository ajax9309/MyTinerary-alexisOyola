import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cardcities from "../../components/cardcities/cardcities";

const Cities = () => {
  const params = useParams();
  // console.log(params);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/api/cities")
    .then((res) =>setCities(res.data.response))
    .catch((err)=> console.log(err))
  }, []);

  return (
    <div className="">
      {cities.length>=0 ? (
        cities.map((city)=> <Cardcities key={city._id} data={city} />)
      ):(
        <h2>No results</h2>
      )}
    </div>
  );
};

export default Cities;
