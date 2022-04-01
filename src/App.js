import React, { useState } from 'react'
import Pencil from './Pencil'
import ToggleAge from './ToggleAge'

const App = () => {
  const [show, setShow]=useState(false)
  return (
    <div>
        {show && <Pencil color='blue' rank={1} />}
      </div>
  )
}

      
    
  


export default App