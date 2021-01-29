import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { rootReducer } from '../rootReducer'
import { store } from '../store'

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof rootReducer>
export type AppThunk = ThunkAction<void, AppState, unknown, AnyAction>
export const useTypedDispatch = () => useDispatch<AppDispatch>()
export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector
