import React, { useState } from 'react'

import './filter.css'
function Filter() {
    const [datas, setDatas] = useState([
        {
          name: 'raj',
          id:1,
          dept:'cse'
        },
        {
          name: 'kamal',
          id:2,
          dept:'cse'
        },{
          name: 'ravi',
          id:3,
          dept:'ece'
        },{
          name: 'mani',
          id:4,
          dept:'ece'
        },{
          name: 'mala',
          id:5,
          dept:'eee'
        },{
          name: 'hello',
          id:6,
          dept:'eee'
        },{
          name: 'world',
          id:7,
          dept:'ece'
        },{
          name: 'ramesh',
          id:8,
          dept:'eee'
        },{
          name: 'raghav',
          id:9,
          dept:'ece' 
        },{
          name: 'vijay',
          id:10,
          dept:'cse'
        }
    ])
    const [dataRender, setRenderData] = useState(datas);
    const dept = datas.map(data => data.dept)
    console.log(dept);
    const uniqDept = [...new Set(dept)] // to extract unique values from array
    uniqDept.unshift('All')
    console.log(uniqDept)
    const handleTab = (d) => {
        if (d === 'All') {
            setRenderData(datas)
            return
        }
        console.log('click', d)
        const filteredData = datas.filter(data => data.dept === d)
        setRenderData(filteredData)
    }
  return (
      <div className='container_filter'>
          <div className='tabContainer'>{uniqDept.map((d,i) => <span key={i} onClick={()=>handleTab(d) }className='tabs'>{d}</span>)}</div>
          {
          dataRender.map(data => <div key={data.id}>
              {data.name} {data.dept}
          
          </div>)
      }</div>
  )
}

export default Filter