type Card = {
  id: string
  value: number | string
  type: string
}

type Grid = Array<Array<Card>>

type Game = {
  isStart: boolean
  isEnd: boolean
  restart: number
  typeCards: string
  size: number
}
