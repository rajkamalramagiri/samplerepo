const initialState = {
    count: 0,
    name: 'raj'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        default:
            return state;
    }
}

export default reducer;