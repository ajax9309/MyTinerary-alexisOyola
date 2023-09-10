import React, { useEffect, useState,useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cardcities from "../../components/cardcities/Cardcities";
import { getAllCities } from "../../svc/cityQueries.js";
import { Search } from "react-bootstrap-icons";

const Cities = () => {
  const params = useParams();
  // console.log(params);
  const [cities, setCities] = useState([]);
  const txtSearch=useRef(null)
  useEffect(() => {
    getAllCities().then(setCities)
  }, []);

  const btnSearch=()=>{
    let input= txtSearch.current.value
    let query="?name="
    getAllCities(query+input).then(setCities)

  }

  return (
    <>
    <div className="row p-3 m-0 w-100 d-flex align-content-center d-sm-flex flex-column flex-sm-row justify-content-sm-center">
      <div className="col-10 d-flex">
        <input type="text" className="form-control col-6" ref={txtSearch}/>
        <button className="btn btn-secondary flex-grow-1" onClick={btnSearch}>🔍</button>
      </div>
      
      {cities.length>=0 ? (
        cities.map((city)=> <Cardcities key={city._id} data={city} />)
      ):(
        <h2>No results</h2>
      )}
    </div>
    </>
  );
};

export default Cities;
