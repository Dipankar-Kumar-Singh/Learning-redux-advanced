import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name : "cart" , 
    initialState : { 
        items : [] 
     } , 
    reducers : {
        addItemToCart(state , action) {
            const item = action.payload ;
            const { id } = item ;
        
            const existingItem = state.items.find((item) => item.id === id) ;
            
            let countOld =  0 ;
            if(existingItem){countOld = existingItem.count }    ;
            const newItem = { ...item , count : countOld + 1 } ;

            // replace the existing item with the new item 
            if(existingItem) {
                state.items = state.items.map((item) => item.id === id ? newItem : item ) ;
            } else {
                state.items.push(newItem) ;
            };

            // console.log(state.items);
        },
        removeItemFromCart(state , action){
            const item = action.payload ;

            const { id } = item ;

            const existingItem = state.items.find((item) => item.id === id) ;   
            const newItem = { ...item , count : (existingItem.count ?? 0 ) - 1 } ;

            if(newItem <= 0){
                state.items = state.items.filter((item) => item.id !== id) ;
                return ;
            }

            // replace the existing item with the new item
            if(existingItem) {
                state.items = state.items.map((item) => item.id === id ? newItem : item ) ;
            }
        }
    }
})

const cartActions = cart.actions ; 
const cartReducer = cart.reducer ;

export { cartActions , cartReducer } ;

