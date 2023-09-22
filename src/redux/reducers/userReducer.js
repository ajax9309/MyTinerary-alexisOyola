import { createReducer } from "@reduxjs/toolkit"
import { logOut, loginWithToken, signIn, signUp, userSignUp } from "../actions/userAction"


const initialState={
    user:null,
    token:null,
}

export const userReducer=createReducer(initialState,(builder)=>
builder
    .addCase(userSignUp,(stateActual,action)=>{
        return{
            ...stateActual,
            user:action.payload
        }
    })
    .addCase(signUp.fulfilled,(stateActual,action)=>{
        return{
            ...stateActual,
            user:action.payload.user,
            token:action.payload.token,

        }
    })
    .addCase(signIn.fulfilled,(stateActual,action)=>{
        return{
            ...stateActual,
            user:action.payload.user,
            token:action.payload.token,

        }
    })
    .addCase(loginWithToken.fulfilled,(stateActual,action)=>{
        return{
            ...stateActual,
            user:action.payload.user,
            token:action.payload.token,

        }
    })
    .addCase(logOut.fulfilled,(stateActual,action)=>{
        return{
            ...stateActual,
            user:action.null,
            token:action.null
        }
    })

    )