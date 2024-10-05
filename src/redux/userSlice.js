import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:'user',
    initialState:{
        name:'ali',
        child:['zobair','kadodak']
    },
    reducers:{
        addChildren:(state , actions) => {
            state.child = [...state.child , ...actions.payload]
        }
    }

})
export const {addChildren} = userSlice.actions