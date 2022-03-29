import React, { Component } from 'react'

class AccordionChild extends Component {
    state = { showInfo: false }
    toggleShow = () => {
        this.setState({showInfo:!this.state.showInfo})
    }
  render() {
    return (
            
            <div>
            <p style={{fontWeight:'bold'}}> {this.props.title}</p> <button onClick={this.toggleShow}>{this.state.showInfo?'-':'+' }</button>
            {
                this.state.showInfo && <div>{this.props.info}</div>
            } 
                
            </div>

    )
  }
}

export default AccordionChild