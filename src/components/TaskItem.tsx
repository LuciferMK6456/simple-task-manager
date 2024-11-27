import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/tasks";
import { deletetaskAPI } from "../Api/taskAPI";
import { Task,deleteTasks, toggleTaskCompletion } from "../redux/tasks/taskSlice";

interface TaskItemProps {
    task:Task,
    // onToggleCompletion:(id:number)=>void,
    // onDelete:(id:number)=>void
}




const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
    debugger;
    const dispatch = useDispatch<AppDispatch>();
    const handleToggle = () => {
        dispatch(toggleTaskCompletion(task.id));
    }
    const handleDelete = async () => {
        await deletetaskAPI(task.id);
        dispatch(deleteTasks(task.id));
    }

    return (
        <li>
            <input type="checkbox" checked={task.completed} onChange={handleToggle} />
            <span style={{ textDecoration: task.completed ? 'line-through' : "none" }} ><b>{task.title}</b></span>
            <button onChange={handleDelete}>Delete</button>
        </li>
    )
}

export default TaskItem;