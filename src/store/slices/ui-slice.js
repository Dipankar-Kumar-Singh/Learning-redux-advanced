import { createSlice } from "@reduxjs/toolkit";

const ui = createSlice({
    name :  "ui" ,
    initialState : { cartIsVisible : false } ,
    reducers : {
        hide(state , action) {
            state.cartIsVisible = false ;
        } ,
        show(state , action){
            state.cartIsVisible = true ;
        } ,
        toggle(state , action) {
            state.cartIsVisible = !state.cartIsVisible ;
        }
    }
})

const uiActions = ui.actions ;
const uiReducer = ui.reducer ;

export { uiActions , uiReducer } ;
