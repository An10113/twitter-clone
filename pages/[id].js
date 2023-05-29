import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import CommentModal from "@/components/modals/CommentModal";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { doc, getDoc } from "firebase/firestore";

export async function getServerSideProps(context){
    const id = context.query.id
    const docRef = doc(db, "posts", id)
    const docSnap = getDoc(docRef)
    const data = docSnap.data()
    const formattedData = {
        username: data.username,
        name: data.name,
        photoUrl:data.photoUrl,
        text: data.tweet,
        Comments : data.comments || null,
        timestamp: JSON.stringify(data.timestamp.toDate())
    }
    return{
        props:{
            tweetData : formattedData
        }
    }
}


export default function CommentPage({tweetData}) {
  return (
      <div className="
      min-h-screen
      max-w-[1400px]
      mx-auto
      text-[#E7E9EA]
      flex
      ">
        <Sidebar />
        <div className="sm:ml-16 xl:ml-96 max-w-2xl flex-grow 
    border-gray-700 border-x">
        <div className="flex space-x-2
        px-3 py-2 text-lg font-bold
        sm:text-xl border-gray-700 sticky top-0 border-b">
            <ArrowLeftIcon className="w-7" />
            <h1>Tweet</h1>
        </div>
    </div>
        <Trending />
      </div>
  )
}
