import React from 'react'
import style from './style.module.scss'
import { Card } from '../index'
import { useAppDispatch, useAppSelector } from '../../hooks'
import type { RootState } from '../../redux/store'
import {
  compareCardAction,
  unflipCardAction,
} from '../../redux/actions/gridActions'

interface TypeCard {
  id: string
  value: number
  type: string
}

interface GridProps {
  grid: Array<Array<TypeCard>>
}

function Grid({ grid }: GridProps) {
  const [flippedCards, setFlippedCards] = React.useState<Array<TypeCard>>([])
  const dispacth = useAppDispatch()
  const cardOnClick = (card: TypeCard) => {
    flippedCards.push(card)
    setFlippedCards(flippedCards)
    if (flippedCards.length === 2) {
      dispacth(compareCardAction(flippedCards))
    }
    if (flippedCards.length === 3) {
      dispacth(compareCardAction(flippedCards))
      setFlippedCards(flippedCards.slice(-1))
    }
  }

  return (
    <div className=''>
      {grid.map((col, colIndex) => (
        <div key={colIndex} className={style.grid__row}>
          {col.map((row, rowIndex) => (
            <Card
              key={`${colIndex}_${rowIndex}`}
              card={row}
              onClick={cardOnClick}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Grid
