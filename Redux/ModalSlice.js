import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    signupModal: false
}

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignupModal: () => {
        state.signupModal = true
    }
    ,closeSignupModal: () => {
        state.signupModal = false
    }
  }
});

export const { openSignupModal, closeSignupModal} = ModalSlice.actions

export default ModalSlice.reducer