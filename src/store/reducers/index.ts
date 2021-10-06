import { combineReducers } from 'redux'
import authReducer from './auth'
import eventReducer from './event'


const rootReducer = combineReducers({
    authReducer,
    eventReducer
})

export default rootReducer