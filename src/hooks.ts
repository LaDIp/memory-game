import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as gameActions from './redux/game/actions'
import * as gridActions from './redux/grid/actions'
import type { RootState } from './redux/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const ActionCreators = { ...gameActions, ...gridActions }

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(ActionCreators, dispatch)
}
