import React, { Component } from 'react'

class Counter extends Component {
     state={count:5}
  render() {
    return (
        <div>Count: {this.state.count}
            
            <input type='text' />
            <button className='btn btn-primary'>Incremnt</button>
            <button className='btn btn-warning'>Decrement</button>

      </div>
    )
  }
}

export default Counter