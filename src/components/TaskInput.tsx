import React from "react";
import { useDispatch, UseDispatch } from "react-redux";
import { addtask } from "../redux/tasks/taskSlice";
import { addtaskAPI } from "../Api/taskAPI";
import { title } from "process";

const TaskInput: React.FC=()=>{

    const [taskTitle,setTaskTitle]= React.useState('');
    const dispatch = useDispatch();


    const handleAddtask = async()=>{
        if (taskTitle.trim()) {
            const newtask = await addtaskAPI(taskTitle);
        if (newtask) {
           
            dispatch(addtask( {
                id:newtask.id,
                title:newtask.title,
                completed:false
            }))
        }
        }
    }

    return (
        <div>
            <input
            type="text"
            value={taskTitle}
            placeholder="enter task title"
            onChange={(e)=>setTaskTitle(e.target.value)}
            />
        </div>
    )
}

export default TaskInput;