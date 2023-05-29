import { useEffect, useState } from "react";
import Tweet from "./Tweet";
import Tweetinput from "./Tweetinput";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import Link from "next/link";

export default function Postsfeed() {

    const [tweet, setTweet] = useState([])
    useEffect(() => {
      const q = query(collection(db, "posts"), orderBy("timestamp", "desc"))
      const unsubcribe = onSnapshot(q,(snapshot) => {
        setTweet(snapshot.docs)
      })      
    })
    useEffect(() => {
      console.log(tweet)
    },[])

  return (
    <div className="sm:ml-16 xl:ml-96 max-w-2xl flex-grow 
    border-gray-700 border-x
    ">
        <div className="px-3 py-2 text-lg font-bold
        sm:text-xl border-gray-700 sticky top-0 border-b
        ">
            Home
        </div>
      <Tweetinput />
      {tweet.map(tweet => {
        return(
      <Link href={tweet.id} id={tweet.id}>
      <Tweet id={tweet.id} key={tweet.id} data={tweet.data()}/>
      </Link>
      );
    })}

    </div>
  )
}
