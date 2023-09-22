import { createReducer } from "@reduxjs/toolkit";
import { cities,cityInput,getCity,clearCity,clearSearch,cityTineraries } from "../actions/cityAction.js";
const initialState={
    allcities:[],
    citiesfilter:[],
    tineraries:[],
    city:null,
    tinerary:null,
    targetvalue:"",
    input:""
}

const citiesReducer = createReducer (initialState,(builder)=>{
     builder
     .addCase(cities.fulfilled,(store,action)=>{
        return{
            ...store,
            allcities: action.payload,
            citiesfilter: action.payload,
            nocities:false
        }
     })
     .addCase(getCity.fulfilled,(store,action)=>{
        return {
            ...store,
            city: action.payload,

        }
     })
     .addCase(clearCity,(stateNow,action)=>{
        return{
            ...stateNow,
            city: action.payload,
        }
     })
    //  .addCase(clearSearch,(stateNow)=>{
    //     return{
    //         ...stateNow,
    //         input:""

    //     }
    //  })
     .addCase(cityTineraries.fulfilled,(store,action)=>{
        return {
            ...store,
            tineraries:action.payload
            
        }
     })
     .addCase(cityInput,(store,action)=>{
        return{
            ...store,
            targetvalue:action.payload.value,
            input:action.payload.input
        }
     })
})

export default citiesReducer