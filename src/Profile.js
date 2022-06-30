import React from 'react'

import { useParams } from 'react-router-dom'

function Profile() {
    const { id } = useParams();
    console.log('Id', id)
    return (
        <div>Profile {id}</div>
    )
}

export default Profile