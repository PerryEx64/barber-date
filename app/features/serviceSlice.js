import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  service: {
    price: 0,
    barberShop: {
      id: '',
      name: '',
      direction: ''
    },
    barber: {
      id: '',
      name: ''
    },
    shedule: '',
    corte: {
      id: '',
      name: ''
    },
    extra: {
      cejas: {
        id: '',
        name: '',
        price: 0
      },
      barba: {
        id: '',
        name: '',
        price: 0
      }
    }
  }
}

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    setService: (state, action) => {
      state.service = action.payload
    },
    setBarbershopService: (state, action) => {
      state.service.barberShop = action.payload
    },
    setBarberService: (state, action) => {
      state.service.barber = action.payload.data

      const price = state.service.price
      state.service.price = (action.payload.price + price)

    },
    setScheduleService: (state, action) => {
      state.service.shedule = action.payload
    },
    setCorteService: (state, action) => {
      state.service.corte = action.payload
    },
    setExtrasCejasService: (state, action) => {
      state.service.extra.cejas = action.payload
    },
    setExtrasBarbaService: (state, action) => {
      state.service.extra.barba = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  setService,
  setBarbershopService,
  setBarberService,
  setScheduleService,
  setCorteService,
  setExtrasBarbaService,
  setExtrasCejasService
} = serviceSlice.actions
export const selectService = (state) => state.service.service
export const selectPrice = (state) => state.service.service.price

export default serviceSlice.reducer
