const startGameAction = (payload: Object) => ({
  type: 'START_GAME',
  payload,
})

const endGameAction = () => ({
  type: 'END_GAME',
})

const openCardAction = () => ({
  type: 'OPEN_CARD',
})

const incMovesAction = () => ({
  type: 'INC_MOVES',
})
const incTimeAction = () => ({
  type: 'INC_TIME',
})

export { startGameAction, incMovesAction, incTimeAction, endGameAction }
