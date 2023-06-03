import { openCommentModal, setCommentTweet } from "@/Redux/ModalSlice"
import { db } from "@/firebase"
import { ChartBarIcon, ChatIcon, HeartIcon, UploadIcon } from "@heroicons/react/outline"
import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Moment from "react-moment"
import { useDispatch, useSelector } from "react-redux"

export default function Tweet({data, id}) {

  const dispatch = useDispatch()
  const router = useRouter()
  const user = useSelector(state => state.user)
  const [likes, setLikes] = useState([])
  async function likeTweet(e){
    e.stopPropagation()
    await updateDoc(doc(db, "posts", id),{
      likes: arrayUnion(user.uid),
    })
  }

  useEffect(() => {
    const unsubcribe = onSnapshot(doc(db, "posts" , id) , (doc) => {
      setLikes(doc.data().likes)
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
        timestamp={data?.timestamp?.toDate()} 
        tweet={data?.tweet}/>
        <div className="p-3 ml-16 text-gray-500 flex space-x-12">
          <div
          onClick={(e)=> {
             e.stopPropagation()
          dispatch(setCommentTweet({
            id: id,
            tweet:data?.tweet,
            photoUrl:data?.photoUrl,
            name:data?.name,
            username:data?.username,
          }));
          dispatch(openCommentModal())}}>
          <ChatIcon className="w-5 h-5 cursor-pointer hover:text-green-500 "/>
          </div>
          <div
          onClick={likeTweet}>
          <HeartIcon className="w-5 h-5 cursor-pointer hover:text-pink-500"/>
          </div>
          <ChartBarIcon className="w-5 h-5 cursor-not-allowed "/>
          <UploadIcon className="w-5 h-5 cursor-not-allowed "/>
        </div>
    </div>
  )
}

export function Tweetheader({photoUrl,username, name, timestamp, tweet}){
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
      </div>
    </div>
  )
}
