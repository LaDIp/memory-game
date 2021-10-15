import React from 'react'
import { Game, StartForm } from './components'
import { useAppDispatch, useAppSelector } from './hooks'
import { generateGridAction } from './redux/actions/gridActions'
import { RootState } from './redux/store'
import style from './App.module.scss'
import classNames from 'classnames'
import {
  endGameAction,
  newGameAction,
  restartGameAction,
  startGameAction,
} from './redux/actions/gameActions'

function App() {
  const grid = useAppSelector((state: RootState) => state.grid)
  const game = useAppSelector((state: RootState) => state.game)
  const dispatch = useAppDispatch()

  const handleRestart = () => {
    dispatch(restartGameAction())
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

  const handleNewGame = () => {
    dispatch(newGameAction())
  }

  return (
    <>
      <div className={style.wrapper}>
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
              <button
                className={classNames(style.button, style.button_newgame)}
                onClick={handleNewGame}
              >
                New Game
              </button>
            </>
          )}
        </header>
        <main className={style.main}>
          {game.isStart || game.isEnd ? (
            <Game game={game} grid={grid} />
          ) : (
            <StartForm />
          )}
        </main>
      </div>
    </>
  )
}

export default App
