import React, { useState, useId, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
function Todo() {
    const [input, setInput] = useState('')
    const [todoList, setTodoList] = useState([])

    const fetchData = async () => {
        const response = await axios.get('http://localhost:3000/todoList')
        setTodoList(response.data)
    }

    useEffect(() => fetchData(), [])

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const addTodo = async () => {
        await axios.post('http://localhost:3000/todoList', { "id": uuidv4(), "task": input })
        fetchData();
        setInput('')

    }
    const hanldeDelete = async (id) => {
        await axios.delete(`http://localhost:3000/todoList/${id}`);
        fetchData();

    }
    const hanldeUpdate = async (index) => {
        const updatedTask = prompt('Update your task', todoList[index].task);
        await axios.put(`http://localhost:3000/todoList/${todoList[index].id}`, { "id": todoList[index].id, "task": updatedTask })
        fetchData();

    }
    return (
        <div><h1> Todo Application </h1>
            <label>Task</label>
            <input type='text' value={input} onChange={handleChange} />
            <button onClick={addTodo}>Add Todo</button>
            {
                todoList.map((todo, index) => <div key={todo.id}><span >{todo.task}</span> <button onClick={() => hanldeDelete(todo.id)}>X</button> <button onClick={() => hanldeUpdate(index)}>Update</button></div>)
            }
        </div>
    )
}

export default Todo