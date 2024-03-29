import Banner from "@/components/Banner";
import Postsfeed from "@/components/Postsfeed";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import CommentModal from "@/components/modals/CommentModal";
import { useSelector } from "react-redux";

export default function Home() {
  const username = useSelector(state => state.user.username)
  return (
    <>
      <div className="
      min-h-screen
      max-w-[1400px]
      mx-auto
      text-[#E7E9EA]
      flex">
        <Sidebar />
        <Postsfeed />
        <Trending />
      </div>
      <CommentModal />
      { !username && <Banner /> }
    </>
    )
}
