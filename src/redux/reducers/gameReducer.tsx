import { AnyAction } from 'redux'

interface gameState {
  isStart: boolean
  moves: number
  time: number
}

const defaultState: gameState = {
  isStart: false,
  moves: 0,
  time: 0,
}

const gameReducer = (state = defaultState, action: AnyAction): gameState => {
  console.log(action)
  switch (action.type) {
    case 'START_GAME':
      return { ...state, isStart: true, moves: 0, time: 0 }
    case 'END_GAME':
      return { ...state, isStart: false, moves: 0, time: 0 }
    case 'INC_MOVES':
      return { ...state, moves: state.moves + 1 }
    case 'INC_TIME':
      return { ...state, time: state.time + 1 }
    default:
      return state
  }
}

export default gameReducer
