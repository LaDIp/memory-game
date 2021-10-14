import React from 'react'
import style from './style.module.scss'
import { GameStat, Grid } from '..'
import { useAppDispatch } from '../../hooks'
import {
  endGameAction,
  incMovesAction,
  incTimeAction,
} from '../../redux/actions/gameActions'
import { compareCardAction } from '../../redux/actions/gridActions'

interface GameProps {
  game: Object;
  grid: Array;
}

const Game: React.FC<GameProps> = ({ game, grid }) => {
  const [flippedCards, setFlippedCards] = React.useState([])
  const [openedCard, setOpenedCard] = React.useState(0)
  const dispacth = useAppDispatch()
  const handleGridClick = (card) => {
    dispacth(incMovesAction())
    flippedCards.push(card)
    setFlippedCards(flippedCards)
    if (flippedCards.length === 2) {
      dispacth(compareCardAction(flippedCards))
      flippedCards.forEach((card) => {
        if (card.type === 'open')
          setOpenedCard((openedCard) => {
            if (openedCard + 1 === game.size) {
              console.log(openedCard)
              dispacth(endGameAction())
            }
            return openedCard + 1
          })
      })
    }
    if (flippedCards.length === 3) {
      dispacth(compareCardAction(flippedCards))
      setFlippedCards(flippedCards.slice(-1))
    }
  }
  return (
    <div className={style.game}>
      <Grid grid={grid} onClick={handleGridClick} />
      <GameStat game={game} />
    </div>
  )
}

export default Game
