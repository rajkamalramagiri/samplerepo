import React, { Component } from 'react'

class Increment extends Component {
    state = {
         age:20
    }
    handleAge = (e) => {
        this.setState({age:e.target.value})
    }
  render() {
    return (
        <div>Increment
            
            <input type='text' value={this.state.age} onChange={this.handleAge} />
            {(this.state.age) + 5}
      </div>
    )
  }
}

export default Increment