import { combineReducers } from 'redux';

import countReducer from './countReducer';
import nameReducer from './nameReducer';


const rootReducer = combineReducers({
    count: countReducer,
    name: nameReducer
});

export default rootReducer;

