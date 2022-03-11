import React, { Component } from 'react'

class Form extends Component {
  state = {
    email: '',
    age: 20
  }
  handleEmail = (e) => {
    this.setState({ email: e.target.value })
  }
  handleAge = (e) => {
    this.setState({age:e.target.value})
  }
  render() {
    return (
      <div>
        <h3>Registration Form</h3>
        <label>Email</label>
        <input
          type='text'
          value={this.state.email}
          onChange={this.handleEmail}
        
        /><br />
        <label>Age</label>
        <input
          type='number'
          value={this.state.age}
          onChange={this.handleAge}
        />

        <h2>My email is {this.state.email} My age is {this.state.age}</h2>
      </div>
    )
  }
}

export default Form