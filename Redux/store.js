import { configureStore } from '@reduxjs/toolkit'
import ModalSlice from './ModalSlice'
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    modal: ModalSlice,
    user: userSlice
  },
})