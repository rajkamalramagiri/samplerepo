import React, { useState, useId } from 'react'
import { v4 as uuidv4 } from 'uuid';
function Todo() {
    const [input, setInput] = useState('')
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            task: 'To train react'
        },
        {
            id: 2,
            task: 'To Correct assignments'
        },

        {
            id: 3,
            task: 'To review code'
        },

        {
            id: 4,
            task: 'To select students to projects'
        },
    ])

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const addTodo = () => {
        setTodoList([...todoList, { id: uuidv4(), task: input }])
        setInput('')

    }
    const hanldeDelete = (id) => {
        const fileteredTodo = todoList.filter(todo => todo.id !== id);
        setTodoList(fileteredTodo)
    }
    const hanldeUpdate = (index) => {
        const updatedTask = prompt('Update your task', todoList[index].task)
        let copiedTodoList = [...todoList];
        copiedTodoList[index].task = updatedTask;
        setTodoList(copiedTodoList)
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