import React from 'react'
import style from './style.module.scss'
import { Card } from '..'

interface GridProps {
  grid: Grid
  onClick: (card: ICard) => void
}

const Grid: React.FC<GridProps> = ({ grid, onClick }) => {
  const cardOnClick = (card: ICard) => {
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
