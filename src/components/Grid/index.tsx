import React from 'react'
import { useActions, useAppSelector } from '../../hooks'
import { RootState } from '../../redux/store'
import Card from '../Card'
import style from './style.module.scss'

type GridProps = {
  onClick: (card: Card) => void
}

function Grid({ onClick }: GridProps) {
  const flippedCards = React.useRef<Array<Card>>([])
  const openedCards = React.useRef(0)
  const grid = useAppSelector((state: RootState) => state.grid)

  const { compareCardAction, endGameAction } = useActions()

  const handleCardClick = (card: Card) => {
    onClick(card)
    flippedCards.current.push(card)
    if (flippedCards.current.length === 2) {
      compareCardAction(flippedCards.current)
      if (flippedCards.current[0].value === flippedCards.current[1].value) {
        console.log(openedCards.current + 1, grid.length * 2)
        if (openedCards.current + 1 === grid.length * 2) {
          endGameAction()
          openedCards.current = 0
        } else {
          openedCards.current = openedCards.current + 1
        }
      }
    }
    if (flippedCards.current.length === 3) {
      compareCardAction(flippedCards.current)
      flippedCards.current.shift()
      flippedCards.current.shift()
    }
  }

  console.log('render')
  console.log(flippedCards)

  return (
    <div className={style.grid}>
      {grid.map((col, colIndex) => (
        <div key={colIndex} className={style.grid__row}>
          {col.map((row, rowIndex) => (
            <Card
              key={`${colIndex}_${rowIndex}`}
              card={row}
              onClick={handleCardClick}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Grid
