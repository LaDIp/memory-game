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
    case 'GENERATE_GRID':
      let values: Array<number> = Array((action.payload * action.payload) / 2)
        .fill(0)
        .map((item, index) => index)
      values = values.concat(values)
      values.sort(() => Math.random() - 0.5)
      console.log(values)
      let grid: gridState = []
      for (let i = 0; i < action.payload; i++) {
        let row = []
        for (let j = 0; j < action.payload; j++) {
          row.push({
            id: `${i}_${j}`,
            value: values[0],
            type: 'hide',
          })
          values.shift()
        }
        grid.push(row)
      }
      console.log(grid)
      return grid
    case 'COMPARE_CARD':
      return state.map((row) =>
        row.map((card) => {
          if (action.payload[0].value === action.payload[1].value) {
            if (card.id === action.payload[0].id) card.type = 'open'
            if (card.id === action.payload[1].id) card.type = 'open'
          }
          if (card.type === 'flip') card.type = 'hide'
          return card
        }),
      )
    case 'FLIP_CARD':
      return state.map((row) =>
        row.map((card) => {
          if (card.id === action.payload.id) card.type = 'flip'
          return card
        }),
      )
    default:
      return state
  }
}

export default gridReducer
