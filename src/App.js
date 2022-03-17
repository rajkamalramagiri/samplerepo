import React, { Component } from 'react'
import Counter from './Counter'
import Flex from './Flex'
import Form from './Form'
import Json from './Json'
import Map from './Map'
import Review from './Review'
import Vegetable from './Vegetable'
import Voting from './Voting'

class App extends Component {
  
  render() {
    return (
      <div>
        <Voting title="C" />
        <Voting title="C++" />
        <Voting title="React"/>
        <Voting title="Angular"/>
        <Voting title="Java"/>
        <Voting title="Phython"/>
        
        
      </div>
    )
  }
}

export default App