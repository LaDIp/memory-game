import { gameState, GameActionTypes, GameAction } from '../types/gameTypes'

const defaultState: gameState = {
  isStart: false,
  isEnd: false,
  restart: 0,
  typeCards: '',
  size: 4,
  moves: 0,
  openedCard: 0,
}

const gameReducer = (state = defaultState, action: GameAction): gameState => {
  switch (action.type) {
    case GameActionTypes.START_GAME:
      return {
        ...state,
        isStart: true,
        isEnd: false,
        typeCards: action.payload.typeCards,
        size: Number(action.payload.size) * Number(action.payload.size),
        moves: 0,
        openedCard: 0,
      }
    case GameActionTypes.END_GAME:
      return { ...state, isEnd: true }
    case GameActionTypes.NEW_GAME:
      return defaultState
    case GameActionTypes.RESTART_GAME:
      return { ...state, restart: state.restart + 1 }
    case GameActionTypes.INC_MOVES:
      return { ...state, moves: state.moves + 1 }
    default:
      return state
  }
}

export default gameReducer
