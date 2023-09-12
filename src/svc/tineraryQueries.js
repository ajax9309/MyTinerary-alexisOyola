import axios from "axios";

const URL_DB="http://localhost:3000/api/tineraries"

export const getAllTineraries=async(queryParams="")=>{
    try {
        const response=await axios(URL_DB+queryParams)
        return response.data.response
    } catch (err) {
        return[]
    }

}

export const getOneTinerary=async(id)=>{
    try {
        const response=await axios(`${URL_DB}/${id}`)
        return response.data.response
    } catch (err) {
        return[]
    }

}