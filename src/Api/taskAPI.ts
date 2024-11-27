import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos"

export const fetchTasks = async()=>{
    try {
        const response = await axios.get(url)
        return response.data.slice(0,5)
    } catch (err){
        console.log("errro occured",err)
    }
}

export const addtaskAPI = async(title:string)=>{
    try {
        const response = await axios.post(url,{title,completed:false})
        return response.data
    } catch (err){
        console.log("errro occured",err)
    }
}
export const deletetaskAPI = async(id:number)=>{
    try {
        const response = await axios.post(`${url}/${id}`);
        return response.data
    } catch (err){
        console.log("errro occured",err)
    }
}