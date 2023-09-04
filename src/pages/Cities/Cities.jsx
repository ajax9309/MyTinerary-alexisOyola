import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cardcities from "../../components/cardcities/cardcities";

const Cities = () => {
  const params = useParams();
  // console.log(params);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/api/cities").then((res) =>
      setCities(res.data.response)
    );
  }, []);

  return (
    <div className="">
      {/* {
        cities.map(city=> <Cardcities keys={city._id} data={city} />)
      }
      <Cardcities/> */}
      
    </div>
  );
};

export default Cities;
