import React from 'react'

function Body(props) {
  return (
      <div>Body
          
          <button onClick={()=>props.setSelected('final')}>Final</button>
    </div>
  )
}

export default Body