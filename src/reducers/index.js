import {combineReducers} from 'redux'
import redLogin from './redLogin';
import userReducer from './userReducer';
import counter from './counterReducer';

const allReducers = combineReducers({
    counter,
    redLogin,
    userReducer
    
})
 
export default allReducers;