import { configureStore } from '@reduxjs/toolkit'
import gameReducer from '../modules/game/GameSlice'

const store = configureStore({
  reducer: {
    game: gameReducer
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch