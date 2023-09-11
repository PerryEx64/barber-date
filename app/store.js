import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/userSlice'
import barberSlice from './features/barberSlice'
import accountSlice from './features/accountSlice'
import barbershopSlice from './features/barbershopSlice'
import updatedSlice from './features/updateSlice'

export const store = configureStore({
  reducer: {
    account: accountSlice,
    user: userSlice,
    barber: barberSlice,
    barbershops: barbershopSlice,
    update: updatedSlice
  }
})