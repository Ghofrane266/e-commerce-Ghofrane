import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    const response = await axios.get("http://localhost:5000/api/v1/products")
    return response.data
})
export const fetchProduct = createAsyncThunk("fetchProduct", async (id) => {
    const response = await axios.get("http://localhost:5000/api/v1/products/" + id)
    console.log(response.data,"from store")
    return response.data
    
})
export const sendProduct = createAsyncThunk("addProduct", async (body) => {
    const response = await axios.post("http://localhost:5000/api/v1/products/", body)
    return response.data
})
export const fetchImages = createAsyncThunk("products/fetchImages", async () => {
    const response = await axios.get("http://localhost:5000/api/v1/images");
    return response.data;
});
export const deleteProduct = createAsyncThunk("deleteProduct", async (id) => {
    const response = await axios.delete("http://localhost:5000/api/v1/products/" + id)
    return response.data
})

export const counterSlice = createSlice({
    name: 'products',
    initialState: {
        product: null,
        products: {
            items: [],
            count: 0
        },
        images: []
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products.items = action.payload
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.product = action.payload
        })
        // builder.addCase(sendProduct.fulfilled, (state, action) => {
        //     state.product = action.payload
        // })
        builder.addCase(fetchImages.fulfilled, (state, action) => {
            state.images = action.payload;
        });
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.products.items = state.products.items.filter(
                (product) => product.id !== action.payload
            );
        })
    }
})
export default counterSlice.reducer;