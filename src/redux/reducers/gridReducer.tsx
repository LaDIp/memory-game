import { gridState, GridActionTypes, GridAction } from '../types/gridTypes'

const defaultState: gridState = []

const icons: Array<string> = [
  'favorite_border',
  'schedule',
  'lightbulb',
  'sports_soccer',
  'grade',
  'pets',
  'flutter_dash',
  'offline_bolt',
  'settings',
  'build',
  'sports_esports',
  'add_circle_outline',
  'shield',
  'notifications',
  'public',
  'sentiment_satisfied',
  'straighten',
  'back_hand',
  'workspace_premium',
  'catching_pokemon',
  'sports_basketball',
  'sports_motorsports',
  'cookie',
  'party_mode',
  'ice_skating',
  'hive',
  'edit', //27
  'palette',
  'remove_red_eye',
  'audiotrack',
  'phone',
  'vpn_key', //32
]

const gridReducer = (state = defaultState, action: GridAction): gridState => {
  switch (action.type) {
    case GridActionTypes.GENERATE_GRID:
      const typeCard = action.payload.typeCards
      const size = action.payload.size
      let values: Array<number | string> = Array((size * size) / 2).fill(0)
      if (typeCard === 'Numbers') values = values.map((item, index) => index)
      if (typeCard === 'Icons') {
        values.sort(() => Math.random() - 0.5)
        values = values.map((item, index) => icons[index])
      }
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
    case GridActionTypes.RESET_GRID:
      return defaultState
    case GridActionTypes.COMPARE_CARD:
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
    case GridActionTypes.FLIP_CARD:
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
