import React, { Component } from 'react'

class StudentForm extends Component {
    state = {
        fname: '',
        lname: '',
        age: 19,
        onSubmitted:false
    }
    hanldeSubmit = () => {
        this.setState({onSubmitted:true})
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        
    }
    // handleFname = (e) => {
    //     this.setState({fname:e.target.value})
    // }
    // handleLname = (e) => {
    //     this.setState({lname:e.target.value})
        
    // }
    // handleAge = (e) => {
    //     this.setState({age:e.target.value})
    // }
  render() {
    return (
        <div>
            <h2>
            StudentForm
            </h2>
            <input type='text' name='fname' value={this.state.fname}
            onChange={this.handleChange} placeholder="First Name"
            /><br/>
            <label>Last Name</label>
            <input type='text' name="lname" value={this.state.lname}
                onChange={this.handleChange} /><br/>
            <label>Age</label>
            <input type='number' name='age' value={this.state.age}
                onChange={this.handleChange} />
            <br />
            <button onClick={this.hanldeSubmit}>Submit</button>
            {this.state.onSubmitted && <div>
                <h2> Name {this.state.fname}{this.state.lname}</h2>
                <h3>Age {this.state.age}</h3>
                
            </div>
            }
            

        </div>
    )
  }
}

export default StudentForm