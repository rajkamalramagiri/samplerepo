import React,{useState} from 'react'
function FuncCounter() {
    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount(count+1)
    }
    const handleDecrement = () => {
        setCount(count-1)
    }
    return (
        <div>
            Count {count}
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default FuncCounter;

// import React, { Component } from 'react'

//  class FuncCounter extends Component {
//      state = { count: 0 }
//      handleInceremnt = () => {
//          this.setState({count:this.state.count+1})
//      }
//      render() {
//     return (
//         <div>count {this.state.count}
//         <button onClick={this.handleInceremnt}>Increment</button>
//         </div>
//     )
//   }
// }

// export default FuncCounter