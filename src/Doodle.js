import React, { Component } from 'react'
import Color from './Color'

 class Doodle extends Component {
  render() {
    return (
        <div>
            <Color color="blue" started="2001" />
            <Color color="red" started={2005}/>
            
      </div>
    )
  }
}

export default Doodle