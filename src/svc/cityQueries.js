import axios from "axios";

const URL_DB="http://localhost:3000/api/cities"

export const getAllCities=async(queryParams="")=>{
    try {
        const response=await axios(URL_DB+queryParams)
        return response.data.response
    } catch (err) {
        return[]
    }

}

export const getOneCity=async(id)=>{
    try {
        const response=await axios(`${URL_DB}/${id}`)
        return response.data.response
    } catch (err) {
        return[]
    }

}