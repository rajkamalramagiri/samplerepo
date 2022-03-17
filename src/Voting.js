import React, { Component } from 'react'

class Voting extends Component {
    state = {
        count: 0,
    }
    handleVote = () => {
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
        <div>
            <div>{this.props.title } {this.state.count}
            <button onClick={this.handleVote}>vote</button>
            </div>
            
      </div>
    )
  }
}

export default Voting