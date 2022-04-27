import React from 'react'
import { connect } from 'react-redux'
function ReduxChild2({ count }) {
    return (
        <div>ReduxChild2 {count}</div>
    )
}
const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(ReduxChild2)