import React,{useState} from 'react'

function Vijay(props) {
    const [age, setAge] = useState(22);
    const [gfName,setGfName]=useState("Sam")
    return (
        <div>
        <div>Vijay's  age is {age}
        
            </div>
            <div>vijay vs {gfName}</div>
            <div>Fav food is {props.favFood }</div>

        </div>
    )
}

export default Vijay;