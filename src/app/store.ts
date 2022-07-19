import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../modules/counter/counterSlice'
import gameReducer from '../modules/game/GameSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    game: gameReducer
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch