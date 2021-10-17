export type gameState = {
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

type startGameAction = {
  type: GameActionTypes.START_GAME
  payload: {
    typeCards: string
    size: number
  }
}

type endGameAction = {
  type: GameActionTypes.END_GAME
}

type newGameAction = {
  type: GameActionTypes.NEW_GAME
}

type restartGameAction = {
  type: GameActionTypes.RESTART_GAME
}

type incMovesAction = {
  type: GameActionTypes.INC_MOVES
}

export type GameAction =
  | startGameAction
  | endGameAction
  | newGameAction
  | restartGameAction
  | incMovesAction
