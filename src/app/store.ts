import { configureStore } from '@reduxjs/toolkit'
import gameReducer from '../features/game/GameSlice'
import playerReducer from '../features/player/PlayerSlice'
import leaderboardReducer from '../features/leaderboard/LeaderboardSlice'

const store = configureStore({
  reducer: {
    game: gameReducer,
    player: playerReducer,
    leaderboard: leaderboardReducer
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch