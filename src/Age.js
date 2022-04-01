import React, { useState } from 'react';
function Age(props) {
    const [age, setAge] = useState([32, 22, 43, 34, 21])
    const [name,setName]=useState("Dhanuja")
    return (
        <div>Age
            {age.map((a, i) => <h3 key={i}>{a}</h3>)}
            <p>Name {name}</p>
            <p>Age is { props.count}</p>
        </div>
    )
}

export default Age;