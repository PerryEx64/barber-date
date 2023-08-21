import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  avatarChosen: 0
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAvatarChosen: (state, action) => {
      state.avatarChosen = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setAvatarChosen } = accountSlice.actions
export const selectAvatarChosen = (state) => state.account.avatarChosen

export default accountSlice.reducer
