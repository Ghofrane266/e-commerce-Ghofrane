import { configureStore } from "@reduxjs/toolkit";
import products from'./products'

import auth from "./auth";

export const store=configureStore({
    reducer:{products,auth},
})