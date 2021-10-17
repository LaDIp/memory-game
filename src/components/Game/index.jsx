import React from 'react'
import style from './style.module.scss'
import { GameStat, Grid } from '..'
import { useActions } from '../../hooks'
import classNames from 'classnames'

type GameProps = {
  game: Object,
  grid: Grid,
}

function Game({ game, grid }: GameProps) {
  const [flippedCards, setFlippedCards] = React.useState([])
  const [openedCard, setOpenedCard] = React.useState(0)
  const { incMovesAction, compareCardAction, endGameAction } = useActions()
  const handleGridClick = (card) => {
    incMovesAction()
    flippedCards.push(card)
    setFlippedCards(flippedCards)
    if (flippedCards.length === 2) {
      compareCardAction(flippedCards)
      flippedCards.forEach((card) => {
        if (card.type === 'open')
          setOpenedCard((openedCard) => {
            if (openedCard + 1 === game.size) {
              endGameAction()
              return 0
            }
            return openedCard + 1
          })
      })
    }
    if (flippedCards.length === 3) {
      compareCardAction(flippedCards)
      setFlippedCards(flippedCards.slice(-1))
    }
  }

  return (
    <div
      className={classNames(style.game, {
        [style.game_4]: game.size === 16,
        [style.game_6]: game.size === 36,
        [style.game_8]: game.size === 64,
      })}
    >
      <Grid grid={grid} onClick={handleGridClick} />
      <GameStat game={game} />
    </div>
  )
}

export default Game
