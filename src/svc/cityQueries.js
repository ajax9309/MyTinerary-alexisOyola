import axios from "axios";

const cityQuery=axios.create({
    baseURL:"http://localhost:3000/api/cities"
})

const tineraryQuery=axios.create({
    baseURL:"http://localhost:3000/api/tineraries"
})

 

export const getAllCities=async(queryParams="")=>{
    try {
        const response=await cityQuery(queryParams)
        return response.data.response
    } catch (err) {
        return[]
    }

}

export const getOneCity=async(id)=>{
    try {
        const response=await cityQuery("/"+id)
        return response.data.response
    } catch (err) {
        return[]
    }

}

export const getTineraries=async (queryParams="")=>{
    try {
        
        const response=await tineraryQuery(queryParams)
        return response.data
    } catch (error) {
        return []
    }

}