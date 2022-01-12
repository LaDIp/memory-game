import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import gridReducer from './grid/reducer'
import gameReducer from './game/reducer'

const rootReducer = combineReducers({ grid: gridReducer, game: gameReducer })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))

export type RootState = ReturnType<typeof rootReducer>
export { store }
