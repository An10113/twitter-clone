import { closeCommentModal } from "@/Redux/ModalSlice";
import { db } from "@/firebase";
import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, XIcon } from "@heroicons/react/outline";
import Modal from "@mui/material/Modal";
import { arrayUnion, collection, doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CommentModal() {
  const isOpen = useSelector((state) => state.modal.commentModal);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const commentTweetDetails = useSelector((state) => state.modal.commentTweetDetails)
  const [comment,setComment] = useState("")
  const router = useRouter()

    async function sendComment(){
      const docRef = doc(db, "posts", commentTweetDetails.id)
      const commentDetails = {
        username: user.username,
        name: user.name,
        photoUrl: user.photoUrl,
        comment: comment,
      }
      await updateDoc(docRef, {
        comments: arrayUnion(commentDetails)
      })
      dispatch(closeCommentModal())
      router.push("/" + commentTweetDetails.id)
    }
  
  return (
    <>
      <Modal
        className="flex justify-center items-center"
        open={isOpen}
        onClose={() => dispatch(closeCommentModal())}
      >
        <div
          className="bg-black
        sm:w-[600px] sm:h-[386px]
        sm:p-10 p-4 relative 
        rounded-lg border border-gray-500 
        w-full h-full text-white">
          <div className="absolute top-[30px] right-[50px]">
            <XIcon 
            onClick={() => dispatch(closeCommentModal())}
            className="w-6 font-bold cursor-pointer"/>
          </div>
          <div className="absolute border h-[76px] border-gray-500 left-[40px] top-[64px] sm:left-[64px] sm:top-[90px] "></div>
          <div>
            <div className="flex space-x-3">
              <img
                className="w-12 h-12 object-cover rounded-full"
                src={commentTweetDetails.photoUrl}
              />
              <div>
                <div className="flex space-x-1.5">
                  <h1 className="font-bold">{commentTweetDetails?.name}</h1>
                  <h1 className="text-gray-500">@{commentTweetDetails.username}</h1>
                </div>
                <p className="mt-1">{commentTweetDetails.tweet}</p>
                <h1 className="mt-2 text-gray-500 text-[15px]">Replying to <span className="text-[#1b9bf0]">@{commentTweetDetails.username}</span></h1>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="flex space-x-3">
                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src={user.photoUrl}
                />
                <div className="w-full">
                  <textarea
                  onChange={e => setComment(e.target.value)}
                  placeholder="tweet your reply"
                  className="w-full bg-transparent resize-none outline-none border-b border-gray-500"/>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex space-x-0.5">
                        <div className="iconAnimation">
                        <PhotographIcon className="h-[22px] text-[#1d9bf0]"/>
                        </div>
                        <div className="iconAnimation"> 
                        <ChartBarIcon className="h-[22px] text-[#1d9bf0]"/>
                        </div>
                        <div className="iconAnimation">
                        <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]"/>
                        </div>
                        <div className="iconAnimation">
                        <CalendarIcon className="h-[22px] text-[#1d9bf0]"/>
                        </div>
                        <div className="iconAnimation">
                        <LocationMarkerIcon className="h-[22px] text-[#1d9bf0]"/>
                        </div>
                      </div>
                    </div>
                    <button
                    onClick={sendComment}
                    disabled={!comment}
                    className=" disabled:opacity-50
                    bg-[#1d9bf0] rounded-full 
                    px-4 py-1.5 hover:bg-opacity-80 ">Tweet</button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
