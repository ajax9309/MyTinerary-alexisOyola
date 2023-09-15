import { createAction,createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCities,getOneCity,getTineraries } from "../../svc/cityQueries";


export const cities= createAsyncThunk("getCities",async()=>{
    const cities=getAllCities()
    return cities
})

export const cityInput=createAction("citysearch",(value,input)=>{
    return {
        payload:{
            value,input
        }
    }
})

export const getCity=createAsyncThunk("getcity",async(id)=>{
    const city=getOneCity(id)
    return city
})

export const clearCity=createAsyncThunk("clearcity",()=>{
    return {
        payload:null
    }
})

export const clearSearch=createAsyncThunk("clearsearch",()=>{
    return{
        payload:null
    }

})

export const cityTineraries=createAsyncThunk("gettineraries",async()=>{
    const tineraries= getTineraries()
    return tineraries
})
