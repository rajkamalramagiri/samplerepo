import React, { Component } from 'react'

class Json extends Component {
    state = {
         users:[
            {
            "userId": 1,
            "id": 1,
            "title": "Breakfast",
            "completed": false
            },
            {
            "userId": 1,
            "id": 2,
            "title": "Dinner",
            "completed": false
            },
            {
            "userId": 1,
            "id": 3,
            "title": "Lunch",
            "completed": true
            },
            {
            "userId": 1,
            "id": 4,
            "title": "Brunch",
            "completed": true
            },
            {
            "userId": 1,
            "id": 5,
            "title": "Snacks",
            "completed": false
            }]
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