import { configureStore } from '@reduxjs/toolkit'
import gameReducer from '../modules/game/GameSlice'
import playerReducer from '../modules/player/PlayerSlice'

const store = configureStore({
  reducer: {
    game: gameReducer,
    player: playerReducer
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch