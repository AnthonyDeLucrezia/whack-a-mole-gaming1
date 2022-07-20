import { PlayerSliceState, savePlayerName } from "./PlayerSlice"
import playerReducer from './PlayerSlice'


describe('Players redux state tests', () => {
  const state: PlayerSliceState = {
    name: '',
  }

  it('should handle initial state', () => {
    const initialState: PlayerSliceState = state
    const action = { type: 'unknown' }
    const expectedState = initialState
    expect(playerReducer(initialState, action)).toEqual(expectedState)
  })

  it('should change player name', () => {
    const initialState: PlayerSliceState = { ...state, name: "" }
    const action = savePlayerName("new player")
    const expectedState: PlayerSliceState = { ...state, name: "new player" }

    expect(playerReducer(initialState, action)).toEqual(expectedState)
  })

  })