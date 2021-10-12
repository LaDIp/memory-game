import React from 'react'
import style from './style.module.scss'
import { Card } from '../index'
import { useAppDispatch, useAppSelector } from '../../hooks'
import type { RootState } from '../../redux/store'
import { compareCardAction } from '../../redux/actions/gridActions'

interface TypeCard {
  id: string
  value: number
  type: string
}

function Grid() {
  const [flippedCards, setFlippedCards] = React.useState<Array<TypeCard>>([])
  const grid = useAppSelector((state: RootState) => state.grid)
  const dispacth = useAppDispatch()
  const cardOnClick = (card: TypeCard) => {
    flippedCards.push(card)
    setFlippedCards(flippedCards)
    if (flippedCards.length === 2) {
      dispacth(compareCardAction(flippedCards))
      setFlippedCards([])
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
