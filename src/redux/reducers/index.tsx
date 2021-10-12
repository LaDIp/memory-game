import { combineReducers } from 'redux'
import { default as gridReducer } from './gridReducer'

const rootReducer = combineReducers({ grid: gridReducer })

export default rootReducer
