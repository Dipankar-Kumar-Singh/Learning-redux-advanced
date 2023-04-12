import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name : "cart" , 
    initialState : { 
        items : new Map() ,
        totalQuantity  : 0 
     } , 
    reducers : {
        addItemToCart(state , action) {
            const item = action.payload ;

            let countOfItem = state.items.get(item) ?? 0 ; 

            state.totalQuantity -= countOfItem ;
            countOfItem++ ;
            state.totalQuantity += countOfItem ;


            state.items.set(item , countOfItem ) ;
            
        },
        removeItemFromCart(state , action){
            const item = action.payload ;
            let countOfItem = state.items.get(item) ?? 0 ; 

            state.totalQuantity -= countOfItem ;
            countOfItem-- ; 
            countOfItem = Math.max(countOfItem,0) ;

            state.totalQuantity += countOfItem ;
            state.items.set(item , countOfItem ) ;
        }
    }
})

const cartActions = cart.actions ; 
const cartReducer = cart.reducer ;

export { cartActions , cartReducer } ;

