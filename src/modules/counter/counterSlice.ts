import { createSlice } from '@reduxjs/toolkit'

//can mutate the state because createSlice use Immer
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

//async function (thunk)
export const incrementAsync = (amount: any) => (dispatch: (arg0: { payload: any; type: string }) => void) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

//selectors
export const selectCount = (state: { counter: { value: any } }) => state.counter.value