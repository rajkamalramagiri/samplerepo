import React from 'react'
import incrementCount from './redux/action'
import { connect } from 'react-redux'
function ReduxCount(props) {
    console.log(props)
    return (
        <div onClick={props.incrementCount}>ReduxCount {props.count}</div>
    )
}
const mapStateToProps = (state) => {
    return {
        count: state.count,
        name: state.name
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        incrementCount: () => dispatch(incrementCount())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxCount);