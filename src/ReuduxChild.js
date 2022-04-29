import React, { useState } from 'react'
import { connect } from 'react-redux'
import decrementCount from './redux/decrementCount'
import incrementCount from './redux/incrementCount'

function ReuduxChild({ count, name, incrementCount, decrementCount }) {
    const [number, setNumber] = useState(0)
    return (
        <div>
            <div>ReuduxChild {count}</div>
            <input type='numbet' value={number} onChange={(e) => setNumber(e.target.value)} />
            <div>Name is {name}</div>
            <button onClick={() => incrementCount(number)}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>

    )
}

// to move state present in store to props

const mapStateToProps = (state) => {
    return {
        count: state.count.count,
        name: state.name.name
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCount: (num) => dispatch(incrementCount(num)),
        decrementCount: () => dispatch(decrementCount())
    }

}

//connecting component with state
export default connect(mapStateToProps, mapDispatchToProps)(ReuduxChild);