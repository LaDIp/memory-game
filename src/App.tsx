import React from 'react'
import { useActions, useAppSelector } from './hooks'
import { RootState } from './redux/store'
import style from './App.module.scss'
import classNames from 'classnames'
import Game from './components/Game'
import StartForm from './components/StartForm'

function App() {
  const game = useAppSelector((state: RootState) => state.game)
  const {
    restartGameAction,
    generateGridAction,
    startGameAction,
    newGameAction,
  } = useActions()

  const handleRestart = () => {
    restartGameAction()
    generateGridAction({
      typeCards: game.typeCards,
      size: game.size,
    })
    startGameAction({
      typeCards: game.typeCards,
      size: game.size,
    })
  }

  const handleNewGame = () => {
    newGameAction()
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
          {game.isStart ? <Game game={game} /> : <StartForm />}
          {game.isEnd && <span className={style.gameover}>GAME OVER</span>}
        </main>
      </div>
    </>
  )
}

export default App
