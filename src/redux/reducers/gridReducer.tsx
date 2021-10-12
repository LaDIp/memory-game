import { AnyAction } from 'redux'
import { Card } from '../../components'

interface TypeCard {
  id: string
  value: number
  type: string
}

type gridState = Array<Array<TypeCard>>

const defaultState: gridState = [
  [
    { id: '1_1', value: 1, type: 'hide' },
    { id: '1_2', value: 2, type: 'hide' },
    { id: '1_3', value: 3, type: 'hide' },
  ],
  [
    { id: '2_1', value: 1, type: 'hide' },
    { id: '2_2', value: 2, type: 'hide' },
    { id: '2_3', value: 3, type: 'hide' },
  ],
  [
    { id: '3_1', value: 1, type: 'hide' },
    { id: '3_2', value: 2, type: 'hide' },
    { id: '3_3', value: 3, type: 'hide' },
  ],
]

const gridReducer = (state = defaultState, action: AnyAction): gridState => {
  console.log(action)
  switch (action.type) {
    case 'SET_GRID':
      return state
    case 'COMPARE_CARD':
      console.log(action.payload)
      if (action.payload[0].value === action.payload[1].value) {
        const newState = state.map((row) =>
          row.map((card) => {
            if (card.id === action.payload[0].id) card.type = 'open'
            if (card.id === action.payload[1].id) card.type = 'open'
            return card
          }),
        )
        console.log(newState)
      }

      return state
    default:
      return state
  }
}

export default gridReducer
