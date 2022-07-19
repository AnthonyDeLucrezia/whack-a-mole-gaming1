import { createSlice } from '@reduxjs/toolkit'

 interface GameSliceState {
    score:number;
}

const initialState = { score: 0 } as GameSliceState

export const gameSlice = createSlice({
  name: 'game',
  initialState : initialState,
  reducers: {
    incrementScore: state => {
      state.score += 10;
    },
    resetScore: (state) => {
        state.score = 0;
    }
  }
})

export const { incrementScore, resetScore } = gameSlice.actions

export default gameSlice.reducer

//selectors
export const selectScore = (state: { game: { score: any; }; }) => state.game.score