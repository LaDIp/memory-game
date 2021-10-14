import { AnyAction } from 'redux'

interface gameState {
  isStart: boolean
  isEnd: boolean
  restart: number
  typeCards: string
  size: number
  moves: number
  openedCard: number
  time: number
}

const defaultState: gameState = {
  isStart: false,
  isEnd: false,
  restart: 0,
  typeCards: '',
  size: 0,
  moves: 0,
  openedCard: 0,
  time: 0,
}

const gameReducer = (state = defaultState, action: AnyAction): gameState => {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        isStart: true,
        isEnd: false,
        typeCards: action.payload.typeCards,
        size: Number(action.payload.gridSize) * Number(action.payload.gridSize),
        moves: 0,
        time: 0,
        openedCard: 0,
      }
    case 'END_GAME':
      return { ...state, isEnd: true }
    case 'NEW_GAME':
      return defaultState
    case 'RESTART_GAME':
      return { ...state, restart: state.restart + 1 }
    case 'INC_MOVES':
      return { ...state, moves: state.moves + 1 }
    case 'INC_TIME':
      return { ...state, time: state.time + 1 }
    default:
      return state
  }
}

export default gameReducer
