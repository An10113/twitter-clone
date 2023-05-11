import Banner from "@/components/Banner";
import Postsfeed from "@/components/Postsfeed";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <div className=" bg-black">
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
      <Banner />
    </div>
    )
}
