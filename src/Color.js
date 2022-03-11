import React, { Component } from 'react'

 class Color extends Component {
  render() {
    return (
        <div>Doodle{this.props.color} started at { this.props.started}</div>
    )
  }
}

export default Color