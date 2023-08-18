import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  barbershopChosen: {
    price: 0,
    barbers: []
  },
  barberChosen: ''
}

export const barberSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setBarbershopChosen: (state, action) => {
      state.barbershopChosen = action.payload
    },
    setBarberChosen: (state, action) => {
      state.barberChosen = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setBarbershopChosen, setBarberChosen } = barberSlice.actions
export const selectBarbershopChosen = (state) => state.barber.barbershopChosen
export const selectBarberChosen = (state) => state.barber.barberChosen

export default barberSlice.reducer
