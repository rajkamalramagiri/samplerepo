import React, { Component } from 'react'

class Vegetable extends Component {
    state = {
         vegetables:['onion','tomato','potato',"lady's finger",'brinjal']
     }
  render() {
    return (
        <div>Vegetable
            {this.state.vegetables.map((veg,i) => <p key={i}>{ veg}</p>)}
      </div>
    )
  }
}

export default Vegetable