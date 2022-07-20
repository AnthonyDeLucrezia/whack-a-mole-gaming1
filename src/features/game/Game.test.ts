
import store from '../../app/store'
import { GameStatus } from '../../models/app.models'
import gameReducer, { GameSliceState, incrementScore, resetScore, start, stop,  } from './GameSlice'


describe('Game redux state tests', () => {
  const state: GameSliceState = { score: 0,
    status:GameStatus.NotStarted,
    gridData :[] 
    }

  it('should handle initial state', () => {
    const initialState: GameSliceState = state
    const action = { type: 'unknown' }
    const expectedState = initialState
    expect(gameReducer(initialState, action)).toEqual(expectedState)
  })

  it('should increment score', () => {
    const initialState: GameSliceState = { ...state, score: 0 }
    const action = incrementScore()
    const expectedState: GameSliceState = { ...state, score: 10 }
    expect(gameReducer(initialState, action)).toEqual(expectedState)
  })

  it('should stop the game', () => {
    const initialState: GameSliceState = { ...state, status:GameStatus.NotStarted }
    const action = stop()
    const expectedState: GameSliceState = { ...state, status:GameStatus.Finished}
    expect(gameReducer(initialState, action)).toEqual(expectedState)
  })

  it('should reset score', () => {
    const initialState: GameSliceState = { ...state, score: 10 }
    const action = resetScore()
    const expectedState: GameSliceState = { ...state, score: 0 }
    expect(gameReducer(initialState, action)).toEqual(expectedState)
  })

  it('should change status to started', () => {
    const initialState: GameSliceState = { ...state, status:GameStatus.NotStarted}
    const action = start()
    const expectedState: GameSliceState = { ...state, status:GameStatus.Started}
    expect(gameReducer(initialState, action)).toEqual(expectedState)
  })

})