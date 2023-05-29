import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import { Tweetheader } from "@/components/Tweet";
import CommentModal from "@/components/modals/CommentModal";
import { db } from "@/firebase";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import Moment from "react-moment";
import { useSelector } from "react-redux";

export async function getServerSideProps(context) {
  const id = context.query.id;
  const docRef = doc(db, "posts", id);
  const docSnap = getDoc(docRef);
  const data = (await docSnap).data();
  const formattedData = {
    username: data.username,
    name: data.name,
    photoUrl: data.photoUrl,
    text: data.tweet,
    Comments: data.comments || null,
    timestamp: JSON.stringify(data.timestamp?.toDate()),
  };
  return {
    props: {
      tweetData: formattedData,
    },
  };
}

export default function CommentPage({ tweetData }) {
    const user = useSelector(state => state.user)
    return (
    <div
      className="
      min-h-screen
      max-w-[1400px]
      mx-auto
      text-[#E7E9EA]
      flex
      "
    >
      <Sidebar />
      <div
        className="sm:ml-16 xl:ml-96 max-w-2xl flex-grow 
    border-gray-700 border-x"
      >
        <div
          className="flex space-x-2
        px-3 py-2 text-lg font-bold
        sm:text-xl border-gray-700 sticky top-0 border-b"
        >
            <Link href={"/"}>
            <ArrowLeftIcon 
            className="w-7" />
            </Link>
          <h1>Tweet</h1>
        </div>
        <div className="border-b border-gray-700">
          <div className="flex space-x-3 p-3">
            <img
              className="w-11 h-11 rounded-full object-cover"
              src={tweetData.photoUrl}
            />
            <div>
              <div className="text-gray-500 flex space-x-2 items-center">
                <h1 className="text-white font-bold">{tweetData.name} </h1>
                <span>@{tweetData.username} </span>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <Moment fromNow>{JSON.parse(tweetData.timestamp)}</Moment>
              </div>
              <span className="text-xl">{tweetData.tweet}</span>
            </div>
          </div>
        </div>
        <div>
            <div>
                <img 
                className=""
                src={user.photoUrl}/>
            </div>
        </div>
      </div>
      <Trending />
    </div>
  );
}
