import React, { Component } from 'react'

class Toggle extends Component {
    state = {
        name: '',
        age: '',
        showAge: false,
        submitted:false
    }
    handlChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = () => {
        this.setState({ submitted: true })
    }
    handleToggleAge = () => {
        this.setState({showAge:!this.state.showAge})
    }
  render() {
    return (
        <div>
            <label>Name</label>
            <input type='text' value={this.state.name} onChange={this.handlChange} name="name" />
<br/>
            <label>Age</label>
            <input type='number' value={this.state.age} onChange={this.handlChange} name="age" />
            <button onClick={this.handleSubmit}>Submit</button>
            {this.state.submitted && <div>
            
                Name: {this.state.name}
                <br />
              
                {
                    this.state.showAge && <div>
                            Age: {this.state .age}
                        </div>
                }

    <button onClick={this.handleToggleAge}>{this.state.showAge ? 'Hide Age' : 'Show Age'}</button>
                
            </div>}
      </div>
    )
  }
}

export default Toggle