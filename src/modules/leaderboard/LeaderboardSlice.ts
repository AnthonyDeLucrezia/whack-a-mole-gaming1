import {  createSlice } from '@reduxjs/toolkit'
import { createNewPlayersAsync, fetchPlayersAsync } from '../../api';
import { Player } from '../../models/app.models';

 interface LeaderboardSliceState {
    players:Player[];
}

const initialState = { players :[] } as LeaderboardSliceState

export const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState : initialState,
  reducers: {
    setPlayers: (state,action) => {
      state.players = action.payload;
    },
  }
})


export const addPlayerToLeaderboardAsync = (newPlayer:Player)  =>  async (dispatch: (arg0: { payload: undefined; type: string; }) => void) => {
    try{
        const leaderboard = await createNewPlayersAsync(newPlayer);
        const sortedPlayer = leaderboard; 
        dispatch(setPlayers(sortedPlayer));
    }catch(err){
        console.error(err);
    }
}

export const { setPlayers } = leaderboardSlice.actions

export default leaderboardSlice.reducer

//selectors
export const selectLeaderboard = (state: { leaderboard: LeaderboardSliceState }) => state.leaderboard.players