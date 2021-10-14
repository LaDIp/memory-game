import React from 'react'
import style from './style.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { incTimeAction } from '../../redux/actions/gameActions'

interface GameStatProps {
  game: Object;
}

const GameStat: React.FC<GameStatProps> = ({ game }) => {
  const [time, setTime] = React.useState(game.time)
  React.useEffect(() => {
    let interval = setInterval(() => setTime((time) => time + 1), 1000)
    if (game.isEnd) {
      return clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [game.isEnd, game.isStart])

  return (
    <div className={style.stat}>
      <div className={style.plate}>
        <p className={style.plate__title}>Moves</p>
        <p className={style.plate__text}>{game.moves}</p>
      </div>
      <div className={style.plate}>
        <p className={style.plate__title}>Time</p>
        <p className={style.plate__text}>
          {Math.floor((time % 3600) / 60)}:
          {Math.floor((time % 3600) % 60) < 10
            ? `0${Math.floor((time % 3600) % 60)}`
            : Math.floor((time % 3600) % 60)}
        </p>
      </div>
    </div>
  )
}

export default GameStat