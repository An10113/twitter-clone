import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    signupModal: false,
    loginModal: false,
    commentModal: false,
}

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignupModal: (state) => {
        state.signupModal = true
    }
    ,closeSignupModal: (state) => {
        state.signupModal = false
    },
    openLoginModal: (state) => {
        state.loginModal = true
    }
    ,closeLoginModal: (state) => {
        state.loginModal = false
    }
    ,openCommentModal: (state) => {
        state.commentModal = true
    }
    ,closeCommentModal: (state) => {
        state.commentModal = false
    }
  }
});

export const { openCommentModal,closeCommentModal,openSignupModal, closeSignupModal, openLoginModal, closeLoginModal} = ModalSlice.actions

export default ModalSlice.reducer