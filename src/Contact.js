import React from 'react'

function Contact(props) {
    console.log("props in contact", props)

    return (
        <div>Contact {props.name}</div>
    )
}

export default Contact