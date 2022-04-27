import { DECREMENT } from './constants'

const decrementCount = () => {
    return {
        type: DECREMENT
    }
}

export default decrementCount;