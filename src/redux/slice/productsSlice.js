import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products") 
    return data
})

const productsSlice = createSlice({
    name: "products",
    initialState: {
        productsData: [],
        loading: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false
                state.productsData = action.payload
            })
            .addCase(getProducts.rejected, (state, {payload}) => {
                state.loading = false
                state.error = payload
            })
    },
})

export default productsSlice.reducer