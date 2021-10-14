const startGameAction = () => ({
  type: 'START_GAME',
})

const endGameAction = () => ({
  type: 'END_GAME',
})

const incMovesAction = () => ({
  type: 'INC_MOVES',
})
const incTimeAction = () => ({
  type: 'INC_TIME',
})

export { startGameAction, incMovesAction, incTimeAction, endGameAction }
