import React from 'react'

function Football(props) {
    console.log("props in football", props)
    const handleClick = () => {
        props.history.push('/cricket')
    }
    const handleHome = () => {
        props.history.push('/')
    }
    const handleBack = () => {
        props.history.goBack();
    }
    return (
        <div>Football
            <button onClick={handleClick}>Go to cricket</button>
            <button onClick={handleHome} >Home</button>
            <button onClick={handleBack} >Back</button>

        </div>
    )
}

export default Football