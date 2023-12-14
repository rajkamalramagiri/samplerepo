import React,{useState} from 'react'
import Child from './Child'
import Body from './Body'

function Parent() {
    const [selected,setSelected]=useState(null)

  return (
      <div>Parent
          <Child selected={selected} setSelected={setSelected} />
          <Body setSelected={setSelected}/>

    </div>
  )
}

export default Parent