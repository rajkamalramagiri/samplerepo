import React, { useState } from 'react'
import sachin from './sachin.png'
const Pencil = ({
    color,
    rank=10
}) => {
    const [age, setAge] = useState(27);
    const [fruits, setFruits] = useState(['apple', 'mango', 'banana', 'grapes'])
    const [students,setStudents]=useState([{id:1,name:'raj',age:31},{id:2,name:'kamal',age:33},{id:3,name:'aswini',age:27}])
    const handleIncrement = () => {
        setAge(age+1)
    }
    return (
        <div>
            {fruits.map(fruit => <h2>{fruit}</h2>)}
            {students.map(student => <div><h3>{student.id }{student.name} {student.age}</h3>
            
            </div>)}
        </div>
    )
}

export default Pencil;