import React from 'react'
import { useActions, useAppSelector } from '../../hooks'
import { RootState } from '../../redux/store'
import Card from '../Card'
import style from './style.module.scss'

type GridProps = {
  onClick: (card: Card) => void
}

let flippedCards: Array<Card> = []
let openedCards = 0

function Grid({ onClick }: GridProps) {
  const grid = useAppSelector((state: RootState) => state.grid)

  const { compareCardAction, endGameAction } = useActions()

  const handleCardClick = (card: Card) => {
    onClick(card)
    flippedCards.push(card)
    if (flippedCards.length === 2) {
      compareCardAction(flippedCards)
      if (flippedCards[0].value === flippedCards[1].value) {
        console.log(openedCards + 1, grid.length * 2)
        if (openedCards + 1 === grid.length * 2) {
          endGameAction()
          openedCards = 0
        } else {
          openedCards = openedCards + 1
        }
      }
    }
    if (flippedCards.length === 3) {
      compareCardAction(flippedCards)
      flippedCards.shift()
      flippedCards.shift()
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
