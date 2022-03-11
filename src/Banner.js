import React, { Component } from 'react'

class Banner extends Component {
  render() {
    return (
        <div>Banner {this.props.film}
        
            <h2>count:{this.props.count}</h2>
            <button onClick={this.props.handleIncrement}>Increment</button>
            <button onClick={this.props.handleDecrement}>Decrement</button>
        </div>
    )
  }
}

export default Banner