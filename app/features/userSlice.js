import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  user: {
    name: '',
    phone: '',
    email: ''
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions
export const selectUser = (state) => state.user.user

export default userSlice.reducer
