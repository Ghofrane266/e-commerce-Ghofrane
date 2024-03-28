import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const config="192.168.1.103"
export const getProducts=createAsyncThunk("getProducts",async()=>{
    try{
    const response=await axios.get(`http://${config}:5000/api/v1/products`)
    return response.data
    }catch(error){
        console.log(error)
    }
})

export const getProduct=createAsyncThunk("getProduct",async(id)=>{
    try{
    const response=await axios.get(`http://${config}:5000/api/v1/products/${id}`)
    return response.data
    }catch(error){
        console.log(error)
    }
})





 const productSlice=createSlice({
    name:'products',
    initialState:{
        product:null,
        products:{
            items:[],
            
        }
    },
    reducers:{},
    extraReducers(builder){
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.products.items=action.payload
        })
        builder.addCase(getProduct.fulfilled,(state,action)=>{
            state.product=action.payload
    })
    }
})



export default productSlice.reducer;
