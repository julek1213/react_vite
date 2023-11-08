import { useState } from "react";

const tasks = [
    {id:1, text:"zadanie 1"},
    {id:2, text:"zadanie 2"},
    {id:3, text:"zadanie 3"},
    {id:4, text:"zadanie 4"},
    {id:5, text:"zadanie 5"}
]

const ToDo = () => {
    const [todos, setToDos] = useState(tasks)
    const removeTaskHandler = (taskId) =>{
        const newTasks = todos.filter(task => task.id !== taskId)
        setToDos(newTasks)
        setToDos()
        }
        setToDos(

        )
        console.log(todos, taskId);

    return(
        <>
        <h1>jestem z komponentu TODO</h1>
        <ul>
            {
                tasks.map( task => (
                <li style={{color: "#ffc300", fontSize:"19px", marginBotttom:"18px", backgroundcolor:"#000814"}} key = {task.id}>
                    <span> {task.id}</span>
                    <button onClick={()=>removeTaskHandler(task.id)}>Usuń zadanie</button>
                </li>
                ))
            }
        </ul>
        </>
    )
}

export default ToDo