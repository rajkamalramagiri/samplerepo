import React, { useState } from 'react'

function NextPrev() {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'raj',
        },
        {
            id: 2,
            name: 'vijay',
        },
        {
            id: 3,
            name: 'Archana',
        },
        {
            id: 4,
            name: 'Aarthi',
        },
        {
            id: 5,
            name: 'Mohit',
        },
    ]);
    const [index, setIndex] = useState(0)
    const hanldeNext = () => {
        if (index === users.length - 1) { //f
            setIndex(0)
        }
        else {
            setIndex(index + 1) //i=
        }
    }
    const hanldeRandom = () => {
        let randomValue = Math.floor(Math.random() * users.length);
        if (randomValue === index) {
            randomValue = ((randomValue + 1) > (users.length - 1)) ? 0 : randomValue + 1
        }
        setIndex(randomValue)
    }
    return (
        <>
            <div>Name: {users[index].name}</div>
            <button>Prev</button>
            <button onClick={hanldeNext}>Next</button>
            <button onClick={hanldeRandom}>Random</button>
        </>
    )
}

export default NextPrev