import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/userSlice'
import barberSlice from './features/barberSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    barber: barberSlice
  }
})