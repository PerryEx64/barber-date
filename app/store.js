import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/userSlice'
import barberSlice from './features/barberSlice'
import accountSlice from './features/accountSlice'

export const store = configureStore({
  reducer: {
    account: accountSlice,
    user: userSlice,
    barber: barberSlice
  }
})