import React from 'react'
import { connect } from 'react-redux'
import decrementCount from './redux/decrementCount'

function ReduxChild3({ decrementCount }) {
    return (
        <button onClick={decrementCount}>Dec</button>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        decrementCount: () => dispatch(decrementCount())
    }

}

export default connect(null, mapDispatchToProps)(ReduxChild3)