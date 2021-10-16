export interface gameState {
  isStart: boolean
  isEnd: boolean
  restart: number
  typeCards: string
  size: number
  moves: number
  openedCard: number
}

export enum GameActionTypes {
  START_GAME = 'START_GAME',
  END_GAME = 'END_GAME',
  NEW_GAME = 'NEW_GAME',
  RESTART_GAME = 'RESTART_GAME',
  INC_MOVES = 'INC_MOVES',
}

interface startGameAction {
  type: GameActionTypes.START_GAME
  payload: {
    typeCards: string
    size: number
  }
}

interface endGameAction {
  type: GameActionTypes.END_GAME
}

interface newGameAction {
  type: GameActionTypes.NEW_GAME
}

interface restartGameAction {
  type: GameActionTypes.RESTART_GAME
}

interface incMovesAction {
  type: GameActionTypes.INC_MOVES
}

export type GameAction =
  | startGameAction
  | endGameAction
  | newGameAction
  | restartGameAction
  | incMovesAction
