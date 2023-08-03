import { openLoginModal } from "@/Redux/ModalSlice"
import { db, storage } from "@/firebase"
import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon } from "@heroicons/react/outline"
import { XIcon } from "@heroicons/react/solid"
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore"
import { getDownloadURL, ref, uploadString } from "firebase/storage"
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"


export default function Tweetinput() {
  
  const [text, setText] = useState("")
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const imagePicker = useRef(null)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  
  async function sendTweet(){
    if(!user.username){
      dispatch(openLoginModal())
      return
    }

    setLoading(true)
    const docRef = await addDoc(collection(db, "posts"),{
      username: user.username,
      name: user.name,
      photoUrl: user.photoUrl,
      uid: user.uid,
      timestamp: serverTimestamp(),
      likes:[],
      tweet: text      
    })

    if(image){
      const imgRef = ref(storage,  `TweetImg/${docRef.id}`)
      const UploadImg = await uploadString(imgRef, image, "data_url")
      const downloadUrl = await getDownloadURL(imgRef)
      await updateDoc(doc(db, "posts",docRef.id),{
        image: downloadUrl
      })
    }

    setText("")
    setImage(null)
    setLoading(false)
  }

  function addImagetoTweet(e){
    const reader = new FileReader()
      if(e.target.files[0]){
        reader.readAsDataURL(e.target.files[0])
      }
      reader.addEventListener("load" , e => setImage(e.target.result))
  }
  return (
    <div className="flex space-x-3 p-3 border-b border-gray-700">
        <img 
        className="w-11 h-11 rounded-full object-cover"
        src={user.photoUrl || "/assets/twitter-logo.png"}/>

        {!loading ? (<div className="w-full">

            <textarea
            value={text}
            onChange={e => setText(e.target.value)} 
            placeholder="What's on your mind? "
            className="bg-transparent resize-none
            outline-none min-h-[50px] text-lg"/>

            {image && 
            <div className="relative mb-4">
              <div 
              onClick={() => setImage(null)}
              className="absolute top-1 left-1
              hover:bg-white hover:bg-opacity-10 bg-[#272c26]
              flex items-center justify-center cursor-pointer rounded-full">
                <XIcon className="h-5 w-5"/>
              </div>
              <img
              src={image}
              className="object-contain max-h-80 rounded-2xl"/>
            </div>}


            <div className="flex justify-between border-t border-gray-700 pt-4">
              <div className="flex space-x-0.5">
                <div className="iconAnimation">
                <PhotographIcon 
                onClick={() => imagePicker.current.click()}
                 className="h-[22px] text-[#1d9bf0]"/>
                <input 
                onChange={addImagetoTweet}
                className="hidden" type="file" ref={imagePicker}/>
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
                disabled={!text && !image} 
                className=" disabled:opacity-50
                bg-[#1d9bf0] rounded-full 
                px-4 py-1.5 hover:bg-opacity-80 ">Tweet</button>
            </div>
        </div>): (<h1 className="text-2xl text-gray-700">Uploading tweet ...</h1>)}
    </div>
  )
}
