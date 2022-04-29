
import { INCREMENT, DECREMENT } from "./constants";
// initial state

const initialState = {
    count: 3,
}


//creating reducer

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + Number(action.payload) }
        case DECREMENT:
            return { ...state, count: state.count - 1 }
        default:
            return state;
    }
}

export default countReducer;