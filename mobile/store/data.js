import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const config="192.168.1.103"  

export const searchProduct=createAsyncThunk("data/searchProduct",async(body)=>{
    try{
        const response=await axios.post(`http://${config}:4000/api/v1/products/search`,body)
        return response.data
        }catch(error){
            console.log(error)
        }


})
const dataSlice = createSlice({
    name: 'data',
    initialState: {
      data: [],
      isLoading: false,
    },
    reducers: {
      // Vous pouvez ajouter des réducteurs synchrones ici si nécessaire
    },
    extraReducers: (builder) => {
      builder
        .addCase(searchProduct.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(searchProduct.fulfilled, (state, action) => {
          state.data = action.payload;
          state.isLoading = false;
        })
        .addCase(searchProduct.rejected, (state) => {
          state.isLoading = false;
          // Gérez les erreurs si nécessaire
        });
    },
  });
  
  export default dataSlice.reducer;