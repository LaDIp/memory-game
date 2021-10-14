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
  onClick: (card: TypeCard) => void
}

const Grid: React.FC<GridProps> = ({ grid, onClick }) => {
  const cardOnClick = (card: TypeCard) => {
    onClick(card)
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
