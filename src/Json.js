import React, { Component } from 'react'
// import todos from './data'
import { todos } from './data'
import {reviews} from './data'
class Json extends Component {
    state = {
      users:reviews
      
     }
  render() {
    return (
        <div>
            {this.state.users.map(user => user.completed && <h2>{ user.title}</h2> )}
      </div>
    )
  }
}

export default Json