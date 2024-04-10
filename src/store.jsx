import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slice/tasksSlice"

import React from 'react'

const store = configureStore({
    reducer:{
        task:tasksReducer
    }
})

export default store ;
