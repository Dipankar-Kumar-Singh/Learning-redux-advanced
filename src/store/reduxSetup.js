import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "./slices/ui-slice";
import { cartReducer } from "./slices/cart-slice";


const store = configureStore({
    reducer : { ui : uiReducer , cart  : cartReducer } 
})


export { store } ;