"use client"
import {createSlice} from "@reduxjs/toolkit"


const showSlice = createSlice({
    name : "show",
    initialState : {show : false},
    reducers : {
        setShow: (suresh, dipesh) => {
            suresh.show = dipesh.payload; // Set show to true or false
          }
    }
})

export const { setShow } = showSlice.actions;
export default showSlice.reducer;
