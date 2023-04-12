import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name : "cart" , 
    initialState : { 
        itemsCountMap: new Map() ,
        itemMap : new Map() 
     } , 
    reducers : {
        addItemToCart(state , action) {
            const item = action.payload ;

            // { itemid : "dsgdsg" , name : "OK" , price : "034"} ;

            const { id  } = item ;
            state.itemMap.set(id,item) ;

            let countOfItem = state.itemsCountMap.get(id) ?? 0  ;  
            countOfItem++ ;
            state.itemsCountMap.set(id , countOfItem ) ;
            
        },
        removeItemFromCart(state , action){
            const item = action.payload ;

            const { id } = item ;
            let countOfItem = state.itemsCountMap.get(id) ?? 0 ; 


            countOfItem-- ; 
            countOfItem = Math.max(countOfItem,0) ;

            state.itemsCountMap.set(id , countOfItem ) ;

            if(countOfItem === 0) state.itemsCountMap.delete(id) ;
        }
    }
})

const cartActions = cart.actions ; 
const cartReducer = cart.reducer ;

export { cartActions , cartReducer } ;

