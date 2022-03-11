import React, { Component } from 'react'

class Name extends Component {
  render() {
    return (
        <div>Name {this.props.firstname}{this.props.lastname} Age is {this.props.age }</div>
    )
  }
}

export default Name