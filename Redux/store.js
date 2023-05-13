import { configureStore } from '@reduxjs/toolkit'
import ModalSlice from './ModalSlice'

export const store = configureStore({
  reducer: {
    modal: ModalSlice
  },
})