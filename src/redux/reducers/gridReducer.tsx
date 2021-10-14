import { AnyAction } from 'redux'
import { Card } from '../../components'

interface TypeCard {
  id: string
  value: number
  type: string
}

type gridState = Array<Array<TypeCard>>

const defaultState: gridState = []

const gridReducer = (state = defaultState, action: AnyAction): gridState => {
  console.log(action)
  switch (action.type) {
    case 'GENERATE_GRID':
      const typeCard = action.payload.typeCards
      const size = +action.payload.gridSize
      let values: Array<number> = Array((size * size) / 2)
        .fill(0)
        .map((item, index) => index)
      values = values.concat(values)
      values.sort(() => Math.random() - 0.5)
      console.log(values)
      let grid: gridState = []
      for (let i = 0; i < size; i++) {
        let row = []
        for (let j = 0; j < size; j++) {
          row.push({
            id: Math.random().toString(),
            value: values[0],
            type: 'hide',
          })
          values.shift()
        }
        grid.push(row)
      }
      console.log(grid)
      return grid
    case 'RESET_GRID':
      return defaultState
    case 'COMPARE_CARD':
      console.log(action.payload)
      return state.map((row) =>
        row.map((card) => {
          if (action.payload[0].value === action.payload[1].value) {
            if (card.id === action.payload[0].id) card.type = 'open'
            if (card.id === action.payload[1].id) card.type = 'open'
          } else {
            if (action.payload.length === 3) {
              if (card.id === action.payload[0].id) card.type = 'hide'
              if (card.id === action.payload[1].id) card.type = 'hide'
            }
          }
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
    case 'UNFLIP_CARD':
      return state.map((row) =>
        row.map((card) => {
          if (card.id === action.payload.id) card.type = 'hide'
          return card
        }),
      )
    default:
      return state
  }
}

export default gridReducer
