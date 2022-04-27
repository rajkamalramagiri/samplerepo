import React from 'react'
import { connect } from 'react-redux'
import decrementCount from './redux/decrementCount'
import incrementCount from './redux/incrementCount'

function ReuduxChild({ count, name, incrementCount, decrementCount }) {
    return (
        <div>
            <div>ReuduxChild {count}</div>
            <div>Name is {name}</div>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>

    )
}

// to move state present in store to props

const mapStateToProps = (state) => {
    return {
        count: state.count,
        name: state.name
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCount: () => dispatch(incrementCount()),
        decrementCount: () => dispatch(decrementCount())
    }

}

//connecting component with state
export default connect(mapStateToProps, mapDispatchToProps)(ReuduxChild);