export const randNr=(min,max)=>{
    return Math.floor(Math.random()*(max-min+1))+min
}

import axios from "axios"

const baseUrl = "https://todoserver-backend.vercel.app/todos" //"http://localhost:8000/"
// összes adat lekérése
export const getTodos=async (setTodos)=>{
    const res = await axios.get(baseUrl)
    setTodos(res.data)
}
//todo törlés
export const deleteTodo = async (id) =>{
    await axios.delete(`${baseUrl}/${id}`)
} 
//todo hozzáadás
export const addTodo = async (task) =>{
    await axios.post(baseUrl ,{task})
}
//todo kész
export const completedTodo = async (id) =>{
    await axios.post(`${baseUrl}/${id}`)
}
//todo összes töröl
export const deleteAll = async () =>{
    await axios.delete(`${baseUrl}`)

}