import React from 'react'
import style from './style.module.scss'
import { Card } from '..'
import { useAppDispatch } from '../../hooks'
import { compareCardAction } from '../../redux/actions/gridActions'
import { incMovesAction } from '../../redux/actions/gameActions'

interface TypeCard {
  id: string
  value: number
  type: string
}

interface GridProps {
  grid: Array<Array<TypeCard>>
}

const Grid: React.FC<GridProps> = ({ grid }) => {
  const [flippedCards, setFlippedCards] = React.useState<Array<TypeCard>>([])
  const dispacth = useAppDispatch()
  const cardOnClick = (card: TypeCard) => {
    dispacth(incMovesAction())
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
    <div className={style.grid}>
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
