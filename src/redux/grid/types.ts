export type gridState = Grid

export enum GridActionTypes {
  GENERATE_GRID = 'GENERATE_GRID',
  RESET_GRID = 'RESET_GRID',
  COMPARE_CARD = 'COMPARE_CARD',
  FLIP_CARD = 'FLIP_CARD',
}

type generateGridAction = {
  type: GridActionTypes.GENERATE_GRID
  payload: {
    typeCards: string
    size: number
  }
}

type resetGridAction = {
  type: GridActionTypes.RESET_GRID
}

type compareCardAction = {
  type: GridActionTypes.COMPARE_CARD
  payload: Array<Card>
}

type flipCardAction = {
  type: GridActionTypes.FLIP_CARD
  payload: Card
}

export type GridAction =
  | generateGridAction
  | resetGridAction
  | compareCardAction
  | flipCardAction
