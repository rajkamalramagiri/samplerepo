// import React, { Component } from "react"
// class Function extends Component{
//     state={name:'Divya'}
//     render() {
//         return (
//             <div>
//                 Function {this.state.name}
//             </div>
//         )
//     }
// }
// export default Function;

//React hooks

//no need of this keyword with funciton component

import React, { useState } from 'react'

function Function() {
    const [name,setName]=useState("Divya")
    return (
        <div>
            Functional component {name}
        </div>
    )
}

export default Function;

