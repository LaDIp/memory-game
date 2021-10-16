export type gridState = Grid

export enum GridActionTypes {
  GENERATE_GRID = 'GENERATE_GRID',
  RESET_GRID = 'RESET_GRID',
  COMPARE_CARD = 'COMPARE_CARD',
  FLIP_CARD = 'FLIP_CARD',
}

interface generateGridAction {
  type: GridActionTypes.GENERATE_GRID
  payload: {
    typeCards: string
    size: number
  }
}

interface resetGridAction {
  type: GridActionTypes.RESET_GRID
}

interface compareCardAction {
  type: GridActionTypes.COMPARE_CARD
  payload: Array<ICard>
}

interface flipCardAction {
  type: GridActionTypes.FLIP_CARD
  payload: ICard
}

export type GridAction =
  | generateGridAction
  | resetGridAction
  | compareCardAction
  | flipCardAction
