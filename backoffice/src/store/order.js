// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";


// export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
//     const response = await axios.get("")
//     return response.data
// })


// export const orderSlice = createSlice({
//     name: 'order',
//     initialState: {
//        order: null,
//         orders: {
//             items: [],
//             count: 0
//         },
//         reducers: {},
//         extraReducers(builder) {
//            builder.addCase(fetchProducts.fulfilled,(state,action)=>{
//             state.orders.items=action.payload
//            })
//         }
//     }
// })

// export default orderSlice.reducer;