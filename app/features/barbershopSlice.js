import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  barbershops: [],
  barbershop: []
}

export const barbershopsSlice = createSlice({
  name: 'barbershops',
  initialState,
  reducers: {
    setBarbershops: (state, action) => {
      state.barbershops = action.payload
    },
    setBarbershop: (state, action) => {
      state.barbershop = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setBarbershops, setBarbershop } = barbershopsSlice.actions
export const selectBarbershops = (state) => state.barbershops.barbershops
export const selectBarbershop = (state) => state.barbershops.barbershop

export default barbershopsSlice.reducer
