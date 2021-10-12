import { PayloadAction } from '@reduxjs/toolkit'
import { default as gridReducer } from '../reducers'

type TypeCard = {
  value: number
  type: string
}

const generateGridAction = (payload: number) => ({
  type: 'GENERATE_GRID',
  payload,
})
const compareCardAction = (payload: Array<TypeCard>) => ({
  type: 'COMPARE_CARD',
  payload,
})
const flipCardAction = (payload: TypeCard) => ({
  type: 'FLIP_CARD',
  payload,
})
export { generateGridAction, compareCardAction, flipCardAction }
