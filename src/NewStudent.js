import React, { Component } from 'react'

 class NewStudent extends Component {
  render() {
    return (
        <div>NewStudent
            <h2>Student Name {this.props.name}</h2>
            <h2>Age is { this.props.age}</h2>
      </div>
    )
  }
}

export default NewStudent