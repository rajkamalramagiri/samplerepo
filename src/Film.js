import React, { Component } from 'react'

class Film extends Component {
    state = {
         collection:1000
    }
    handleIncrement = () => {
        this.setState({collection:this.state.collection+1})
    }
  render() {
    return (
        <div>Film name: {this.props.name}
            
            <h2>Collection {this.state.collection}</h2>
            <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}

export default Film