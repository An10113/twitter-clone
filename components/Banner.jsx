import LogInModal from "./modals/LogInModal";
import SignUpmodal from "./modals/SignUpmodal";

export default function Banner() {
  return (
    <div className="fixed bg-[#1d9bf0]
    bottom-0 h-[80px] w-full xl:space-x-[200px]
    flex justify-center items-center ">
        <div className="hidden xl:inline text-white">
            <h1 className="text-2xl font-bold">Don't miss what's happening</h1>
            <span className="text-[18px] font-normal">People on Twitter are the first to know</span>
        </div>
        <div className="space-x-3 ">
            {/* <button className="hover:bg-[#cbd2d7] h-[40px] w-[160px] rounded-full border border-white text-white bg-transparent ">Log In</button> */}
            <LogInModal />
            <SignUpmodal />
        </div>
    </div>
  )
}
