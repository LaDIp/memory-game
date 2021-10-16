import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))

export type RootState = ReturnType<typeof rootReducer>
export { store }
