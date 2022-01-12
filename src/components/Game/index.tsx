import React from 'react'
import style from './style.module.scss'
import classNames from 'classnames'
import Grid from '../Grid'
import GameStat from '../GameStat'

type GameProps = {
  game: Game
}

function Game({ game }: GameProps) {
  const [moves, setMoves] = React.useState(0)

  React.useEffect(() => {
    setMoves(0)
  }, [game.restart])

  const handleGridClick = () => {
    setMoves((moves) => moves + 1)
  }

  return (
    <div
      className={classNames(style.game, {
        [style.game_4]: game.size === 4,
        [style.game_6]: game.size === 6,
        [style.game_8]: game.size === 8,
      })}
    >
      <Grid onClick={handleGridClick} />
      <GameStat game={game} moves={moves} />
    </div>
  )
}

export default Game
