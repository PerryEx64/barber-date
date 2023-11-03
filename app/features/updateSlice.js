import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  updateBarbers: false
}

export const updatedSlice = createSlice({
  name: 'updated',
  initialState,
  reducers: {
    setUpdateBarbers: (state, action) => {
      state.updateBarbers = action.payload
    }
  }
})

export const { setUpdateBarbers } = updatedSlice.actions
export const selectUpdateBarbers = (state) => state.update.updateBarbers

export default updatedSlice.reducer
