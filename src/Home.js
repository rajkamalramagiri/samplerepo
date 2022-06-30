import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  const [Products, setProducts] = useState([])
  const fetchData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    console.log('response', response)
    setProducts(response.data)
  }
  useEffect(() => { fetchData() }, [])

    return (
      <div className='flex'>
        {Products.map(product => <Link to={`/product/${product.id}`}> <div >
          <img src={product.image} height="100" width={100} />
          <div className='title'>{product.title}</div>
        </div> </Link>)}
      </div>
    )
}

export default Home