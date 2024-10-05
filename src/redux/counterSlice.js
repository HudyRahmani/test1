import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value : 7
    },
    reducers:{
        increment: (state) => {
            state.value ++;
        },
        decrement: (state) => {
            state.value --;
        },
        incrementby:(state ,action) =>{
            state.value += action.payload
        }
    }
})

export const{increment, decrement , incrementby} = counterSlice.actions;