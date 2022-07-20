
import leaderboardReducer, { LeaderboardSliceState, setPlayers } from './LeaderboardSlice'


describe('leaderboard redux state tests', () => {
  const state: LeaderboardSliceState = {
    players :[] 
    }

  it('should handle initial state', () => {
    const initialState: LeaderboardSliceState = state
    const action = { type: 'unknown' }
    const expectedState = initialState
    expect(leaderboardReducer(initialState, action)).toEqual(expectedState)
  })

  it('should add players', () => {
    const initialState: LeaderboardSliceState = { ...state, players: [] }
    const action = setPlayers([{score:999, name:"Test"}])
    const expectedState: LeaderboardSliceState = { ...state, players:[{score:999, name:"Test"}] }
    expect(leaderboardReducer(initialState, action)).toEqual(expectedState)
  })

})