import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export interface Task {
    id:number;
    title:string;
    completed:boolean;
}
export interface TaskState {
    tasks:Task[];
    filter: 'all'|'pending'|'completed';
}

const initialState:TaskState = {
    tasks:[],
    filter:'all'
}

const taskSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        setTasks(state,action:PayloadAction<Task[]>){
            state.tasks=action.payload;
        },
        deleteTasks(state,action:PayloadAction<number>){
            state.tasks = state.tasks.filter(task=>task.id !== action.payload)
        },
        addtask(state,action:PayloadAction<Task>){
            state.tasks.push(action.payload);
        },
        setFilter(state,action:PayloadAction<'all'|'completed'|'pending'>){
            state.filter = action.payload
        },
        toggleTaskCompletion(state,action:PayloadAction<number>){
            const task = state.tasks.find(task=>task.id === action.payload)
            if (task) {
                task.completed = !task.completed;
            }
        }
    }
});

export const  {setTasks,toggleTaskCompletion,setFilter,addtask,deleteTasks} = taskSlice.actions;
export default taskSlice.reducer;