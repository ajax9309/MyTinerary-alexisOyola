import React, { useEffect } from "react";
import Cardcities from "../../components/cardcities/Cardcities";
import { useSelector,useDispatch } from "react-redux";
import { cityInput, clearSearch, cities } from "../../redux/actions/cityAction";


const Cities = () => {

  const cityStore = useSelector((store)=>store.getCities)
  const dispatch = useDispatch()
  // console.log(cities);
  // const txtSearch=useRef(null)
  
  useEffect(() => {
    dispatch(cities())
    dispatch(clearSearch())
  }, [dispatch]);

  const btnSearch=(e)=>{
    dispatch(cityInput(cityStore.value, e.target.value))

  }

  const filterCities= cityStore.allcities.filter((data)=>{
    const city=data.city||""
    return city.toLowerCase().startsWith((cityStore.input||"").toLowerCase().trim())
  })

  let citycards

  if(cityStore.nocities){
    citycards=<h2>Loading...</h2>
  }else{
    citycards=filterCities.length>0?(
      filterCities.map((data)=>(
        <Cardcities key={data._id} data={data} />

      ))
    ):( <h2>No results</h2>)
    }


  return (
    <>
    <div className="row p-3 m-0 w-100 d-flex align-content-center d-sm-flex flex-column flex-sm-row justify-content-sm-center">
      <h1>
        Find your destination beyond the best cities below
      </h1>
      <div className="col-10 d-flex">
        <input type="text" className="form-control col-6" placeholder="search a city" onChange={btnSearch} value={cityStore.input}/>
        <button className="btn btn-secondary flex-grow-1" >🔍</button>
      </div>
      {citycards}
    </div>
    </>
  );
};

export default Cities;
