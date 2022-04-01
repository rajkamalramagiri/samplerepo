import React,{useState} from 'react'

function NameChange() {
    const [name, setName] = useState("Lavanya")
    
    const nameChange = () => {
        setName("Prathusya")
    }
    return (
        <div>
            Name {name}
            <button onClick={nameChange}>Change</button>
        </div>
    )
}

export default NameChange;

