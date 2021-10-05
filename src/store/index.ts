import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const store = createStore(rootReducer, composeWithDevTools( 
    applyMiddleware(thunkMiddleware) 
))

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store