import { combineReducers } from 'redux';
import userReducer from './AuthReducer'

const reducers = combineReducers({
    auth: userReducer
})

export default reducers;