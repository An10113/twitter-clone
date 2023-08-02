import { db } from "@/firebase"
import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon } from "@heroicons/react/outline"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useState } from "react"
import { useSelector } from "react-redux"


export default function Tweetinput() {
  
  const [text, setText] = useState("")
  const user = useSelector(state => state.user)
  
  async function sendTweet(){
    const docRef = await addDoc(collection(db, "posts"),{
      username: user.username,
      name: user.name,
      photoUrl: user.photoUrl,
      uid: user.uid,
      timestamp: serverTimestamp(),
      likes:[],
      tweet: text
    })

    setText("")
  }

  return (
    <div className="flex space-x-3 p-3 border-b border-gray-700">
        <img 
        className="w-11 h-11 rounded-full object-cover"
        src={user.photoUrl || "/assets/twitter-logo.png"}/>
        <div className="w-full">
            <textarea
            value={text}
            onChange={e => setText(e.target.value)} 
            placeholder="What's on your mind? "
            className="bg-transparent resize-none
            outline-none min-h-[50px] text-lg"/>
            {/* icon div */}
            <div className="flex justify-between border-t border-gray-700 pt-4">
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
                <button
                onClick={sendTweet}
                disabled={!text || !user.username} 
                className=" disabled:opacity-50
                bg-[#1d9bf0] rounded-full 
                px-4 py-1.5 hover:bg-opacity-80 ">Tweet</button>
            </div>
        </div> 
    </div>
  )
}
