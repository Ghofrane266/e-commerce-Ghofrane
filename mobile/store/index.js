import { configureStore } from "@reduxjs/toolkit";
import products from'./products';
import auth from "./auth";
import data from "./data"

export const store=configureStore({
    reducer:{products,auth,data},
})