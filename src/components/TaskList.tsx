import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { RootState, AppDispatch } from "../redux/tasks";
import { setTasks, setFilter, toggleTaskCompletion, deleteTasks } from '../redux/tasks/taskSlice';
import { fetchTasks } from '../Api/taskAPI';

const TaskList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { tasks, filter } = useSelector((state: RootState) => state.tasks);
    useEffect(() => {
        const loadTasks = async () => {
            const tasks = await fetchTasks();
            dispatch(setTasks(tasks))
        }
        loadTasks();
    }, [dispatch]);
    useEffect(() => {
        console.log("tasks", tasks)
    }, [tasks])

    let filteredTasks: any = tasks && tasks.length > 0 ? tasks.find((task,i) => {
        if (filter === 'completed') return [task.completed];
        if (filter === 'pending') return [!task.completed];
        return true
    }) : []
    console.log("filteredTasks", filteredTasks)



    return (

        <div>
            <div>
                <button onClick={() => dispatch(setFilter('all'))} >ALL</button>
                <button onClick={() => dispatch(setFilter('pending'))} >Pending</button>
                <button onClick={() => dispatch(setFilter('completed'))} >Completed</button>
            </div>

            <ul>
                {
                    filteredTasks && filteredTasks.length > 0 && filteredTasks?.map((task: any) => (
                        <TaskItem key={task.id} task={task} />
                        // <TaskItem key={task.id} task={task} onToggleCompletion={toggleTaskCompletion} onDelete={deleteTasks}/>
                    ))
                }
            </ul>

        </div>
    )




}

export default TaskList;