import React, { Component } from 'react'
import Banner from './Banner'
import Film from './Film'
import NewStudent from './NewStudent'
import StudentForm from './StudentForm'
//all opening tag should have a closing
class App extends Component {
  state = {
    count: 0,
    title: 'IceCreamCount',
    name: 'vijay',
    age: 22,
    flag:true,
  }

  handleToggle = () => {
    this.setState({flag:!this.state.flag})
  }
  handleIncrement = () => {
    this.setState({count:this.state.count+1})
  }
  handleDecrement = () => {
    this.setState({count:this.state.count-1})
  }
 
  render() {
    return (
      <div>
        <StudentForm/>
        {/* {
          this.state.flag && <p>Hello</p>
        }
        <button onClick={this.handleToggle}>Toggle</button> */}

        {/* <h2> Title:{this.state.title} Count:{this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment Count</button>
        <Banner film="Beast" count={this.state.count}
          handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement }/>
        <Banner film="Valimai" handleIncrement={this.handleIncrement } />
        <NewStudent name={this.state.name} age={ this.state.age}/>
        
        <Film name='beast' />
        <Film name='valimai' /> */}
        
      </div>
      
    )
  }
}

export default App