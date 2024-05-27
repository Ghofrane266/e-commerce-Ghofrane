
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

export const login = createAsyncThunk("login",async (args,{dispatch})=>{
    const response = await axios.post("http://localhost:5000/api/v1/auth/login",args)
    localStorage.setItem('token',response.data)
    dispatch(getMe())
    
})
export const signup = createAsyncThunk("signup",async (args,{dispatch})=>{
    const response = await axios.post("http://localhost:5000/api/v1/auth/signup",args)
    const token = response.data.token;
    localStorage.setItem('token',token)
    dispatch(getMe())
    return response.data

    
})
export const updateProfile = createAsyncThunk("updateMe",async (body,{dispatch})=>{
    const token = localStorage.getItem("token");
    const response = await axios.post('http://localhost:5000/api/v1/auth/update-me',body,{
        headers:{
            Authorization:'Bearer '+token
    }})
    localStorage.setItem('token',response.data)
    dispatch(getMe())

})
export const getMe = createAsyncThunk("getMe",async ()=>{
    const token =localStorage.getItem('token')
    const response = await axios.get("http://localhost:5000/api/v1/auth/me",{headers:{
        Authorization:'Bearer '+token
    }})
    return response.data

})

export const logout = createAsyncThunk("logout",async ()=>{
    localStorage.removeItem("token")
    console.log("logout")

})








export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        me:null,
    },


    reducers: {},
    extraReducers (builder){
        builder.addCase(getMe.fulfilled, (state,action)=>{
            state.me = action.payload
        })
        builder.addCase(logout.fulfilled, (state,action)=>{
            state.me = null
        })
    }
  })
  export default authSlice.reducer;