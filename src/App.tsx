import React from 'react'
import { Grid } from './components'
import { useAppDispatch, useAppSelector } from './hooks'
import { generateGridAction } from './redux/actions/gridActions'
import { RootState } from './redux/store'

function App() {
  const grid = useAppSelector((state: RootState) => state.grid)
  const dispatch = useAppDispatch()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(generateGridAction(+e.currentTarget.value))
  }

  return (
    <>
      <button onClick={handleClick} value={4}>
        4x4
      </button>
      <button onClick={handleClick} value={6}>
        6x6
      </button>
      <button onClick={handleClick} value={8}>
        8x8
      </button>
      {grid && <Grid grid={grid} />}
    </>
  )
}

export default App
