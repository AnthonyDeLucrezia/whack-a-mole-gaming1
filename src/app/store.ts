import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../modules/counter/counterSlice'
import gameReducer from '../modules/game/GameSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    game: gameReducer
  }
})