import React from 'react'
import { Game, Grid, RadioButton, RadioGroup, StartForm } from './components'
import { useAppDispatch, useAppSelector } from './hooks'
import { generateGridAction } from './redux/actions/gridActions'
import { RootState } from './redux/store'
import style from './App.module.scss'
import { incTimeAction } from './redux/actions/gameActions'

function App() {
  const grid = useAppSelector((state: RootState) => state.grid)
  const game = useAppSelector((state: RootState) => state.game)

  return (
    <>
      <main className={style.main}>
        {game.isStart ? <Game game={game} grid={grid} /> : <StartForm />}
      </main>
    </>
  )
}

export default App
