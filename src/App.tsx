import React from 'react'
import { Grid } from './components'
import { useAppDispatch } from './hooks'
import { generateGridAction } from './redux/actions/gridActions'

function App() {
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    dispatch(generateGridAction(4))
  }, [dispatch])
  return (
    <>
      <Grid />
    </>
  )
}

export default App
