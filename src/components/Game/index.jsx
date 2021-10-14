import React from 'react'
import style from './style.module.scss'
import { Grid } from '..'
import { useAppDispatch } from '../../hooks'
import { incTimeAction } from '../../redux/actions/gameActions'

interface GameProps {
  game: Object;
  grid: Array;
}

const Game: React.FC<GameProps> = ({ game, grid }) => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    let time = 0
    if (game.isStart) {
      time = setInterval(() => dispatch(incTimeAction()), 1000)
    } else {
      return () => clearInterval(time)
    }
  }, [game.isStart])

  return (
    <div className={style.game}>
      <Grid grid={grid} />
      <div className={style.game__stat}>
        <div className={style.plate}>
          <p className={style.plate__title}>Moves</p>
          <p className={style.plate__text}>{game.moves}</p>
        </div>
        <div className={style.plate}>
          <p className={style.plate__title}>Time</p>
          <p className={style.plate__text}>
            {Math.floor((game.time % 3600) / 60)}:
            {Math.floor((game.time % 3600) % 60) < 10
              ? `0${Math.floor((game.time % 3600) % 60)}`
              : Math.floor((game.time % 3600) % 60)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Game
