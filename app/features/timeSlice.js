import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  timeService: true,
  maxService: 0
}

export const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setTime: (state) => {
      //solo puede hacer 2 pedidos seguidos
      //suma 1 a max service
      if (state.maxService < 3) {
        state.maxService = state.maxService + 1
      } else {
        state.timeService = false
      }
    },
    setMaxService: (state) => {
      state.timeService = true
      state.maxService = 0
    }
  }
})

// Action creators are generated for each case reducer function
export const { setMaxService, setTime } = timeSlice.actions
export const selectTimeService = (state) => state.time.timeService
export const selectMaxService = (state) => state.time.maxService

export default timeSlice.reducer
