import React, {useState,useEffect } from 'react'

function FetchJson() {
  const [todos, setTodos] = useState([])
  
  //componendDidMount in class based component

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())
    .then(data=>setTodos(data.slice(0,10)))
  }

  useEffect(() => {
    fetchData();
  }, []) //[]--> to execute useEffect only ones
  
  const handleDelete = (id) => {
    let newList = todos.filter(todo => todo.id !== id);
    setTodos(newList)
}

  console.log('Todos',todos)
  return (
    <div>FetchJson
      {todos.map(todo => <div key={todo.id}>{todo.id}  {todo.title} <button className='btn btn-danger' onClick={() => handleDelete(todo.id)}>Delete</button></div>)}
      <button className='btn btn-primary' onClick={fetchData}> Refresh</button>



    </div>
  )
}

export default FetchJson