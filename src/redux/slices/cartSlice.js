import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cart: []
}



const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        ADD : (state, action)=>{
            state.cart = [...state.cart, action.payload];     
        }
    }
})


export const {ADD} = cartSlice.actions
export const cartReducer = cartSlice.reducer