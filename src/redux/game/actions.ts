const startGameAction = (payload: Object) => ({
  type: 'START_GAME',
  payload,
})

const endGameAction = () => ({
  type: 'END_GAME',
})
const restartGameAction = () => ({
  type: 'RESTART_GAME',
})

const newGameAction = () => ({
  type: 'NEW_GAME',
})

const incMovesAction = () => ({
  type: 'INC_MOVES',
})

export {
  startGameAction,
  endGameAction,
  newGameAction,
  restartGameAction,
  incMovesAction,
}
