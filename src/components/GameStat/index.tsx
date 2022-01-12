import React from 'react'
import style from './style.module.scss'

type GameStatProps = {
  game: Game
  moves: number
}

function GameStat({ game, moves }: GameStatProps) {
  const [time, setTime] = React.useState(0)

  React.useEffect(() => {
    let interval = setInterval(() => setTime((time) => time + 1), 1000)
    if (game.isEnd) clearInterval(interval)
    return () => {
      clearInterval(interval)
    }
  }, [game.isEnd])

  React.useEffect(() => {
    setTime(0)
  }, [game.restart])

  return (
    <div className={style.stat}>
      <div className={style.plate}>
        <p className={style.plate__title}>Moves</p>
        <p className={style.plate__text}>{moves}</p>
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
