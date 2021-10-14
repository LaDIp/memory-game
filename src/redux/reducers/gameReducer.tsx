import { AnyAction } from 'redux'

interface gameState {
  isStart: boolean
  isEnd: boolean
  typeCards: string
  size: number
  moves: number
  openedCard: number
  time: number
}

const defaultState: gameState = {
  isStart: false,
  isEnd: false,
  typeCards: '',
  size: 0,
  moves: 0,
  openedCard: 0,
  time: 0,
}

const gameReducer = (state = defaultState, action: AnyAction): gameState => {
  console.log(action)
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        isStart: true,
        typeCards: action.payload.typeCards,
        size: Number(action.payload.gridSize) * Number(action.payload.gridSize),
        moves: 0,
        time: 0,
        openedCard: 0,
      }
    case 'END_GAME':
      return { ...state, isEnd: true }
    case 'INC_MOVES':
      return { ...state, moves: state.moves + 1 }
    case 'INC_TIME':
      return { ...state, time: state.time + 1 }
    default:
      return state
  }
}

export default gameReducer
