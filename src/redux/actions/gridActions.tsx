import { PayloadAction } from '@reduxjs/toolkit'
import { default as gridReducer } from '../reducers'

type TypeCard = {
  value: number
  type: string
}

const setGridAction = (payload: PayloadAction<number>) => ({
  type: 'SET_GRID',
  payload,
})
const compareCardAction = (payload: Array<TypeCard>) => ({
  type: 'COMPARE_CARD',
  payload,
})

export { setGridAction, compareCardAction }
