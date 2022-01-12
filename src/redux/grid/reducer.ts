import { gridState, GridActionTypes, GridAction } from './types'

const defaultState: gridState = []

// [
//   [
//     {
//       id: '0.7858471527056572',
//       value: 7,
//       type: 'hide',
//     },
//     {
//       id: '0.11494344886181285',
//       value: 2,
//       type: 'hide',
//     },
//     {
//       id: '0.03633998196950383',
//       value: 0,
//       type: 'hide',
//     },
//     {
//       id: '0.958677635198139',
//       value: 3,
//       type: 'hide',
//     },
//   ],
//   [
//     {
//       id: '0.1120130869292919',
//       value: 1,
//       type: 'hide',
//     },
//     {
//       id: '0.19619272462817117',
//       value: 6,
//       type: 'hide',
//     },
//     {
//       id: '0.21643568295450422',
//       value: 1,
//       type: 'hide',
//     },
//     {
//       id: '0.8562875829599121',
//       value: 7,
//       type: 'hide',
//     },
//   ],
//   [
//     {
//       id: '0.5786707962366746',
//       value: 5,
//       type: 'hide',
//     },
//     {
//       id: '0.8094037175821986',
//       value: 5,
//       type: 'hide',
//     },
//     {
//       id: '0.42558076600130423',
//       value: 0,
//       type: 'hide',
//     },
//     {
//       id: '0.13884502663269105',
//       value: 3,
//       type: 'hide',
//     },
//   ],
//   [
//     {
//       id: '0.02583876712921751',
//       value: 4,
//       type: 'hide',
//     },
//     {
//       id: '0.5655253780138341',
//       value: 4,
//       type: 'hide',
//     },
//     {
//       id: '0.12995043177982923',
//       value: 6,
//       type: 'hide',
//     },
//     {
//       id: '0.008815643390182037',
//       value: 2,
//       type: 'hide',
//     },
//   ],
// ]

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
            if (card.id === action.payload[0].id)
              return { ...card, type: 'open' }
            if (card.id === action.payload[1].id)
              return { ...card, type: 'open' }
          } else {
            if (action.payload.length === 3) {
              if (card.id === action.payload[0].id)
                return { ...card, type: 'hide' }
              if (card.id === action.payload[1].id)
                return { ...card, type: 'hide' }
            }
          }
          return card
        }),
      )
    case GridActionTypes.FLIP_CARD:
      return state.map((row) =>
        row.map((card) => {
          if (card.id === action.payload.id) return { ...card, type: 'flip' }
          return card
        }),
      )
    default:
      return state
  }
}

export default gridReducer
