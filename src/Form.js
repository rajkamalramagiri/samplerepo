import React, { Component } from 'react'

class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    age: 20,
    address: '',
    gender: "",
    singing: false,
    painting: false,
    dancing: false,
    dept: '',
    agreement: false,
    date: '',
    submit: false,
    password: '',
    confirmPassword:'',
  }
  handleSubmit = () => {
    if (!this.state.firstName) {
      alert('firstname is mandatory')
      return
    }
    
    if((this.state.password) && (this.state.password ===this.state.confirmPassword))
      this.setState({ submit: true })
    else
      alert('Password should match')
  }
  handleChange = (e) => {
    if (e.target.type == 'checkbox') {
      this.setState({[e.target.name]:e.target.checked})
    } else {
      
      this.setState({[e.target.name]:e.target.value})
    }
  }
  render() {
    return (
      <div> Registration Form
        <div>
          {!this.state.submit && (
            <div>
              <label>FirstName</label>
              <input type='text' name='firstName' onChange={this.handleChange} value={this.state.firstName} /><br />
              <label>LastName</label>
              <input type='text' name='lastName' onChange={this.handleChange} value={this.state.lastName} />
              <br /><label>Date of Birth</label>
              <input type='date' value={this.state.date} onChange={this.handleChange} name='date' />
              <br />
              <label>Age</label>
              <input type='number' name='age' value={this.state.age} onChange={this.handleChange} /><br />
              <textarea name='address' value={this.state.address} onChange={this.handleChange} placeholder=' Type your address' />

              {/* select input?           */}
              <br />

              <label>Department</label>
              <select name='dept' value={this.state.dept} onChange={this.handleChange}>
                <option value="">Select your department</option>
                <option value='cse'>Computer Science</option>
                <option value='chemistry'>Chemistry</option>
                <option value='physics'>Physics</option>
              </select>
              <br />
              <label>Gender</label>
              <input type='radio' name="gender" value="Male"
                onChange={this.handleChange} />
              <label>Male</label>
              <input type='radio' name='gender' value="Female" onChange={this.handleChange} />
              <label>Female</label>
              <input type='radio' name="gender" value="Others" onChange={this.handleChange} /><label>Others</label>
              <br />
              <label>Hobbies</label>
              <input type="checkbox" checked={this.state.singing} name="singing" onChange={this.handleChange} /> Singing
              <input type="checkbox" checked={this.state.painting} name='painting' onChange={this.handleChange} /> Painting
              <input type="checkbox" checked={this.state.dancing} name='dancing' onChange={this.handleChange} /> Dancing<br />
              <label>Password</label>
              <input name='password' value={this.state.password} onChange={this.handleChange} type='password' />
              <label>Confirm password</label>
              <input value={this.state.confirmPassword} name='confirmPassword' onChange={this.handleChange} type='password' />
              {this.state.password}
              {this.state.confirmPassword}
              <button className='btn btn-outline-primary' onClick={this.handleSubmit}>Submit</button>

            </div>)}


          {this.state.submit && (
            <div>
              <div>Name {this.state.firstName}{this.state.lastName}</div>
              <div>Born on {this.state.date}</div>
              <div>Your are {this.state.age} years old</div>
              <div>Your address is {this.state.address}</div>
              <div>You are studying in {this.state.dept}</div>
              <div>Gender selected is {this.state.gender}</div>
              <div>Your hobbies are {this.state.dancing && 'Dancing'} {this.state.painting && 'Painting'}{this.state.singing && "Singing"}</div>
            </div>)}


      </div></div>
    )
  }
}

export default Form