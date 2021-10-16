interface ICard {
  id: string
  value: number | string
  type: string
}

type Grid = Array<Array<ICard>>
