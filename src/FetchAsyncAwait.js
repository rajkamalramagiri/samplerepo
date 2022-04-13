import React, { useState, useEffect } from 'react'

// https://jsonplaceholder.typicode.com/todos


function FetchAsyncAwait() {
    const [todos, setTodos] = useState([])

    // API CALL
    // fetching using .then()
    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/todos").then(response => response.json())
            .then(data => setTodos(data))
    }

    //fetching using async and await

    // to use await you should prefix the function with async keyword
    // await will tell the js engine to wait until the given task is completed.

    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        setTodos(data)
    }

    useEffect(() => {
        getData();
    }, [])

    console.log("todos", todos)
    return (
        <div>FetchAsyncAwait</div>
    )
}

export default FetchAsyncAwait