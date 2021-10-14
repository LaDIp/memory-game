import React from 'react'
import { Game, StartForm } from './components'
import { useAppDispatch, useAppSelector } from './hooks'
import { generateGridAction } from './redux/actions/gridActions'
import { RootState } from './redux/store'
import style from './App.module.scss'
import classNames from 'classnames'
import { startGameAction } from './redux/actions/gameActions'

function App() {
  const grid = useAppSelector((state: RootState) => state.grid)
  const game = useAppSelector((state: RootState) => state.game)
  const dispatch = useAppDispatch()

  const handleRestart = () => {
    dispatch(
      generateGridAction({
        typeCards: game.typeCards,
        gridSize: Math.sqrt(game.size),
      }),
    )
    dispatch(
      startGameAction({
        typeCards: game.typeCards,
        gridSize: Math.sqrt(game.size),
      }),
    )
  }

  return (
    <>
      <header className={style.header}>
        <span className={style.logo}>memory</span>
        {game.isStart && (
          <>
            <button
              className={classNames(style.button, style.button_restart)}
              onClick={handleRestart}
            >
              Restart
            </button>
            <button className={classNames(style.button, style.button_newgame)}>
              New Game
            </button>
          </>
        )}
      </header>
      <main className={style.main}>
        {game.isStart ? <Game game={game} grid={grid} /> : <StartForm />}
      </main>
    </>
  )
}

export default App
