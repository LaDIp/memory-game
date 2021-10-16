const generateGridAction = (payload: Object) => ({
  type: 'GENERATE_GRID',
  payload,
})
const resetGridAction = () => ({
  type: 'RESET_GRID',
})
const compareCardAction = (payload: Array<ICard>) => ({
  type: 'COMPARE_CARD',
  payload,
})
const flipCardAction = (payload: ICard) => ({
  type: 'FLIP_CARD',
  payload,
})

export {
  generateGridAction,
  compareCardAction,
  flipCardAction,
  resetGridAction,
}
