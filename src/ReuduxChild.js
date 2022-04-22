import React from 'react'
import { connect } from 'react-redux'

function ReuduxChild(props) {
    return (
        <div>
            <div>ReuduxChild {props.count}</div>
            <div>Nme is {props.name}</div>
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

//connecting component with state
export default connect(mapStateToProps)(ReuduxChild);