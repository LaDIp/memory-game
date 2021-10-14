import { combineReducers } from 'redux'
import { default as gridReducer } from './gridReducer'
import { default as gameReducer } from './gameReducer'

const rootReducer = combineReducers({ grid: gridReducer, game: gameReducer })

export default rootReducer
