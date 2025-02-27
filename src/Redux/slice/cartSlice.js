import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"addToCart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {addToCart}=cartSlice.actions
export default cartSlice.reducer