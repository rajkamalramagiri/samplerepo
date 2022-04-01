import React, { useState} from 'react'

function ToggleAge() {
    const [name, setName] = useState('Raj')
    const[showAge,setShowAge]=useState(false)
    const [age, setAge] = useState(31)
    const handleShowAge = () => {
        setShowAge(!showAge)
    }
  return (
      <div>ToggleAge
          <h2>Name {name}</h2>
          <button onClick={handleShowAge}>{showAge?'Hide':'Show' }</button>
          {showAge && <h2>Age {age}</h2>
          }
    </div>
  )
}

export default ToggleAge