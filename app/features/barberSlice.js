import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  barbers: [],
  barbershopChosen: {
    price: 0,
    barbers: []
  },
  barberChosen: '',
  barberServiceClient: {
    client: '',
    id: '',
    phone: '',
    schedule: ''
  }
}

export const barberSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setBarbers: (state, action) => {
      state.barbers = action.payload
    },
    setBarbershopChosen: (state, action) => {
      state.barbershopChosen = action.payload
    },
    setBarberChosen: (state, action) => {
      state.barberChosen = action.payload
    },
    setBarberServiceClient: (state, action) => {
      state.barberServiceClient = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  setBarbershopChosen,
  setBarberChosen,
  setBarbers,
  setBarberServiceClient
} = barberSlice.actions
export const selectBarbershopChosen = (state) => state.barber.barbershopChosen
export const selectBarberChosen = (state) => state.barber.barberChosen
export const selectBarbers = (state) => state.barber.barbers
export const selectBarberClient = (state) => state.barber.barberServiceClient

export default barberSlice.reducer
