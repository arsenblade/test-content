import {combineReducers} from 'redux'
import { adsReducer } from './adsReducer'

export const rootReducer = combineReducers({
  ads: adsReducer
})

export type RootState = ReturnType<typeof rootReducer>