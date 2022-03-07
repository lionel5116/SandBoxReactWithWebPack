import {combineReducers} from 'redux'
import redLogin from './redLogin';
import userReducer from './userReducer';
import counterReducer from './counterReducer';

const allReducers = combineReducers({
    counterReducer,
    redLogin,
    userReducer
    
})
 
export default allReducers;