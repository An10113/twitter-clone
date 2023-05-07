import Postsfeed from "@/components/Postsfeed";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="
    bg-black 
    min-h-screen
    max-w-[1400px]
    mx-auto
    text-[#E7E9EA]">
      <Sidebar />
      <Postsfeed />
      {/* <Trending /> */}
    </div>
    )
}
