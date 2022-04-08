import React, {useState,useEffect } from 'react'

function FetchJson() {
  const [todos, setTodos] = useState([])
  
  //componendDidMount in class based component

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())
    .then(data=>setTodos(data.slice(0,10)))
  }, []) //[]--> to execute useEffect only ones
  
  console.log('Todos',todos)
  return (
    <div>FetchJson
      {todos.map(todo => <div key={todo.id}>{todo.id}  {todo.title }</div>)}



    </div>
  )
}

export default FetchJson