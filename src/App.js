import React, { useState } from 'react'
import { GrMailOption } from "react-icons/gr";
import { BiPhone } from "react-icons/bi";
import './App.css'
import dhoni from './assets/dhoni.jpeg';
import sachin from './assets/sachin.png'



const App = () => {
  return (
    <div>
      <div className='navbar_new'>
        <span className='title'>
          Pazhakkadai
        </span>
        <div className='d-flex '>

          <div className='mr-2'>
            <BiPhone color='white' size='20'/>
            <div>
            Login
            </div>
          </div>
          <div className='mr-2'>
            <BiPhone color='white' size='20'/>
            <div>
            Register
            </div>
          </div>
        </div>
      </div>
      <img src='https://c.ndtvimg.com/2021-07/gs2djea8_ms-dhoni-new-look-instagram_625x300_30_July_21.jpg'/>
      <img src={sachin}/>
      hello <GrMailOption  size='20' color='#ff0000'/><br />
      phone <BiPhone color='blue' size='40'/>
      </div>
  )
}

      
    
  


export default App