import { INCREMENT } from "./constants";

const incrementCount = (number) => {
    console.log(number)
    return {
        type: INCREMENT,
        payload: number
    }
}

export default incrementCount;