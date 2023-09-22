import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const userSignUp=createAction("usersignup",(user=>{
    return {
        payload:user
    }
}))

export const signUp=createAsyncThunk("signup",async(body)=>{
    try {
        const res= await axios.post("http://localhost:3000/api/auth/signup",body)
        localStorage.setItem("token",res.data.token)
        console.log(res.data.token);
        return res.data
    } catch (err) {
        console.log(err);
    }
})

export const signIn=createAsyncThunk("signin",async(body)=>{
    try {
        const res= await axios.post("http://localhost:3000/api/auth/signin",body)
        localStorage.setItem("token",res.data.token)
        console.log(res.data.token);
        return res.data
    } catch (err) {
        console.log(err);
        return err.res.data
    }
})

export const logOut=createAsyncThunk("logout",async()=>{
    localStorage.removeItem("token")
    return{
        payload:null
    }
})

export const loginWithToken=createAsyncThunk("loginwithtoken",async()=>{
    try {
        const token= localStorage.getItem("token")
        const res=await axios.post("http://localhost:3000/api/auth/signin/token",{},{
            headers:{
                Authorization:"Bearer "+ token
            }
        })
        console.log(res);
        return{
            user: res.data.userData,
            token:token
        }

    } catch (error) {
        console.log(error);
        
    }
})
