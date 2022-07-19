import { AnyAction, createSlice } from '@reduxjs/toolkit'
import { MoleProps } from '../../components/mole/Mole';
import { generateMoles, getRandomMoleId } from '../../utils/utils';
import { GameStatus } from './Game.models';

 interface GameSliceState {
    score:number;
    status: GameStatus;
    gridData:MoleProps[][];
}

const initialState = { score: 0,
   status:"NOT STARTED",
   gridData :[] } as GameSliceState

export const gameSlice = createSlice({
  name: 'game',
  initialState : initialState,
  reducers: {
    start: state => {
      state.status = "STARTED";
    },
    stop: state => {
      state.status = "FINISHED";
      state.gridData = [];
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
  dispatch(start())
  const intervalId = setInterval(() => {
    const grid = generateMoles(numberOfRow, numberOfCols);
    dispatch(setGridData(grid));
  }, 1000);
  setTimeout(() => {
    clearInterval(intervalId);
    dispatch(stop());
  }, 120000)
}

export const { incrementScore, resetScore, start, stop, setGridData} = gameSlice.actions

export default gameSlice.reducer

//selectors
export const selectScore = (state: { game: GameSliceState }) => state.game.score
export const selectDataGrid = (state: { game: GameSliceState }) => state.game.gridData
export const selectStatus = (state: { game: GameSliceState }) => state.game.status