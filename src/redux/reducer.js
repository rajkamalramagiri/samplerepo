
import { INCREMENT, DECREMENT } from "./constants";
// initial state

const initialState = {
    count: 3,
    name: 'ravi'
}


//creating reducer

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 }
        case DECREMENT:
            return { ...state, count: state.count - 1 }
        default:
            return state;
    }
}

export default reducer;