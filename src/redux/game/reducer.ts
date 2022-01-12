import { gameState, GameActionTypes, GameAction } from './types'

const defaultState: gameState = {
  isStart: false,
  isEnd: false,
  restart: 0,
  typeCards: '',
  size: 4,
}

const gameReducer = (state = defaultState, action: GameAction): gameState => {
  switch (action.type) {
    case GameActionTypes.START_GAME:
      return {
        ...state,
        isStart: true,
        isEnd: false,
        typeCards: action.payload.typeCards,
        size: Number(action.payload.size),
      }
    case GameActionTypes.END_GAME:
      return { ...state, isEnd: true }
    case GameActionTypes.NEW_GAME:
      return defaultState
    case GameActionTypes.RESTART_GAME:
      return { ...state, restart: state.restart + 1 }
    default:
      return state
  }
}

export default gameReducer
