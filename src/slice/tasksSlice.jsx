import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    tasksSlice:[],
    selectedTask:{}
}

const tasksSlice = createSlice({
    name:"tasksSlice",
    initialState:initialState,
    reducers:{
        addTaskToList:(state=initialState,action)=>{
            const id = Math.random()*100;
            console.log("id",id);
            const task= {...action.payload,id};
            state.tasksSlice.push(task)
        },
        removeFromList:(state,action)=>{
            state.tasksSlice=state.tasksSlice.filter((task)=>task.id!==action.payload.id);
        },
        upadteTaskInList:(state,action)=>{
            state.tasksSlice=state.tasksSlice.map((task)=>task.id===action.payload.id?action.payload:task)
        },
        setSelectedTask:(state,action)=>{
            state.selectedTask=action.payload
        }
    }
})

export const{addTaskToList,removeFromList,upadteTaskInList,setSelectedTask}=tasksSlice.actions;
export default tasksSlice.reducer;