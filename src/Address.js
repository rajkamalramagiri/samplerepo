import React from 'react'
import { useParams } from 'react-router-dom'

function Address(props) {
    const params = useParams();
    console.log('param', params)
    const handleHome = () => {
        props.history.push('/about')
    }
    return (
        <div>Address {params.id}

            <button onClick={handleHome}> go Home</button>
        </div>
    )
}

export default Address
