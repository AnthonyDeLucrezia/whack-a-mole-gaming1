import {  createSlice } from '@reduxjs/toolkit'
import { MoleProps } from '../../components/mole/Mole';
import { GameStatus } from '../../models/app.models';
import { generateMoles } from '../../utils/utils';

 interface GameSliceState {
    score:number;
    status: GameStatus;
    gridData:MoleProps[][];
}

const initialState = { score: 0,
   status:GameStatus.NotStarted,
   gridData :[] } as GameSliceState

export const gameSlice = createSlice({
  name: 'game',
  initialState : initialState,
  reducers: {
    start: state => {
      state.status = GameStatus.Started;
    },
    stop: state => {
      state.status = GameStatus.Finished;
      state.gridData = [];
    },
    restart: state => {
      state.status = GameStatus.NotStarted;
      state.gridData = [];
      state.score = 0;
    },
    setGridData: (state, action) => {
      state.gridData = action.payload;
    },
    incrementScore: state => {
      state.score += 10;
    },
    resetScore: (state) => {
        state.score = 0;
    }
  }
})

//async function (thunk)
export const startGameAsync = ()  =>  (dispatch: (arg0: { payload: undefined; type: string; }) => void) => {
  const numberOfRow = 3;
  const numberOfCols = 4;
  dispatch(resetScore());
  dispatch(start())
  const intervalId = setInterval(() => {
    const grid = generateMoles(numberOfRow, numberOfCols);
    dispatch(setGridData(grid));
  }, 1000);
  setTimeout(() => {
    clearInterval(intervalId);
    dispatch(stop());
  }, 15000)
}

export const { incrementScore, resetScore, start, stop, setGridData, restart} = gameSlice.actions

export default gameSlice.reducer

//selectors
export const selectScore = (state: { game: GameSliceState }) => state.game.score
export const selectDataGrid = (state: { game: GameSliceState }) => state.game.gridData
export const selectStatus = (state: { game: GameSliceState }) => state.game.status