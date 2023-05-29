import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    signupModal: false,
    loginModal: false,
    commentModal: false,
    commentTweetDetails:{
        id:null,
        tweet:null,
        photoUrl:null,
        name:null,
        username:null,
    }
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
    },

    setCommentTweet: (state, action) => {
        state.commentTweetDetails.username = action.payload.username,
        state.commentTweetDetails.name = action.payload.name,
        state.commentTweetDetails.tweet = action.payload.tweet,
        state.commentTweetDetails.id = action.payload.id,
        state.commentTweetDetails.photoUrl = action.payload.photoUrl
    }
  }
});

export const { setCommentTweet,openCommentModal,closeCommentModal,openSignupModal, closeSignupModal, openLoginModal, closeLoginModal} = ModalSlice.actions

export default ModalSlice.reducer