import React,{useState} from 'react'

function Child({selected,setSelected}) {
  return (
      <div>Child
          {(selected === 'initial') && <div>Initial</div>}
          {(selected === 'final') && <div>Final</div>}
          <button onClick={()=>setSelected('initial')}>Initial</button>
          <button onClick={()=>setSelected('final')}> Final</button>

          

    </div>
  )
}

export default Child