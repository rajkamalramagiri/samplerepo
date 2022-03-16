import React, { Component } from 'react'

class Map extends Component {
    state = {
        name:'raj',
        numbers: [2, 8, 4, 2],
        fruits:['apple','mango','grapes','banana']
     }
  render() {
    return (
        <div> {this.state.numbers.map((n, i) => <h2 key={i}>
            {n}
        </h2>)}
            
            {this.state.fruits.map((fruit, i) => <h3 key={i}>
                {i + 1}.   {fruit}
            </h3>)}
      </div>
    )
  }
}

export default Map