import React from 'react'
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

function Contacts() {
    return (
        <div>Contacts List
            <Link to='/profile/1'>Profile 1</Link>
            <Link to='/profile/2'>Profile 2</Link>
            <Link to='/profile/3'>Profile 3</Link>

        </div>
    )
}

export default Contacts