import { openCommentModal, openLoginModal, setCommentTweet } from "@/Redux/ModalSlice"
import { db } from "@/firebase"
import { ChartBarIcon, ChatIcon, HeartIcon, TrashIcon, UploadIcon } from "@heroicons/react/outline"
import { arrayRemove, arrayUnion, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Moment from "react-moment"
import { useDispatch, useSelector } from "react-redux"
import { HeartIcon as FillHeartIcon } from "@heroicons/react/solid"

export default function Tweet({data, id}) {

  const dispatch = useDispatch()
  const router = useRouter()
  const user = useSelector(state => state.user)
  const [likes, setLikes] = useState([])
  const [comment, setComment] = useState([])

  async function deleteTweet(e){
    e.stopPropagation()
    await deleteDoc(doc(db, "posts", id))
  }

  async function likeTweet(e){
    e.stopPropagation()
    if(!user.name){
      dispatch(openLoginModal())
      return
    }
    if(likes.includes(user.uid)){
      await updateDoc(doc(db, "posts", id),{
        likes: arrayRemove(user.uid),
      })
    }
    else{
      await updateDoc(doc(db, "posts", id),{
        likes: arrayUnion(user.uid),
      })
    }
  }

  useEffect(() => {
    if(!id) return
    const unsubcribe = onSnapshot(doc(db, "posts" , id) , (doc) => {
      setLikes(doc.data()?.likes)
      setComment(doc.data()?.comments)
    })
  },[])

  return (
    <div
        onClick={() => router.push("/" + id )} 
        className="border-b border-gray-700 cursor-pointer">
        <Tweetheader
        photoUrl={data?.photoUrl} 
        username={data?.username} 
        name={data?.name}  
        image={data?.image}  
        timestamp={data?.timestamp?.toDate()} 
        tweet={data?.tweet}/>
        <div className="p-3 ml-16 text-gray-500 flex space-x-12">
          <div
          className="justify-center flex items-center space-x-1"
          onClick={(e)=> {
          e.stopPropagation()
          if(!user.name){
            dispatch(openLoginModal())
            return
          }

          dispatch(setCommentTweet({
            id: id,
            tweet:data?.tweet,
            photoUrl:data?.photoUrl,
            name:data?.name,
            username:data?.username,
          }));
          dispatch(openCommentModal())}}>
          <ChatIcon className="w-5 h-5 cursor-pointer hover:text-green-500 "/>
          {comment?.length > 0 && <span className="">{comment.length}</span>}
          </div>
          <div
          className="justify-center flex items-center space-x-1"
          onClick={likeTweet}>
            { likes.includes(user.uid) ? 
          <FillHeartIcon className="w-5 h-5 cursor-pointer text-pink-500"/> :
          <HeartIcon className="w-5 h-5 cursor-pointer hover:text-pink-500"/>
            }
            {likes.length > 0 && <span className="">{likes.length}</span>}
          </div>
          {user.uid === data?.uid && 
          <div 
          onClick={deleteTweet}
          className="w-5 cursor-pointer hover:text-red-600">
            <TrashIcon />
          </div> }
          <ChartBarIcon className="w-5 h-5 cursor-not-allowed "/>
          <UploadIcon className="w-5 h-5 cursor-not-allowed "/>
        </div>
    </div>
  )
}

export function Tweetheader({photoUrl,username, name, timestamp, tweet, image}){
  return(
    <div className="flex space-x-3 p-3">
      <img 
      className="w-11 h-11 rounded-full object-cover"
      src={photoUrl}/>
      <div>
        <div className="text-gray-500 flex space-x-2 items-center">
          <h1 className="text-white font-bold">{name}</h1>
          <span>@{username}</span>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <Moment fromNow>
          {timestamp}
          </Moment>
        </div>
        <span>{tweet}</span>
        {image && <img 
        className="max-h-80 rounded-2xl object-cover mt-3 border border-gray-700"
        src={image}/>}
      </div>
    </div>
  )
}
