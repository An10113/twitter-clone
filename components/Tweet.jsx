import { ChartBarIcon, ChatIcon, HeartIcon, UploadIcon } from "@heroicons/react/outline"

export default function Tweet() {
  return (
    <div className="border-b border-gray-700">
        <Tweetheader />
        <div className="p-3 ml-16 text-gray-500 flex space-x-12">
          <ChatIcon className="w-5 h-5 cursor-pointer hover:text-green-500 "/>
          <HeartIcon className="w-5 h-5 cursor-pointer hover:text-pink-500"/>
          <ChartBarIcon className="w-5 h-5 cursor-not-allowed "/>
          <UploadIcon className="w-5 h-5 cursor-not-allowed "/>
        </div>
    </div>
  )
}

export function Tweetheader(){
  return(
    <div className="flex space-x-3 p-3">
      <img 
      className="w-11 h-11 rounded-full object-cover"
      src="/assets/kylie.png"/>
      <div>
        <div className="flex space-x-2 items-center">
          <span>@kylie</span>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <span>2 hours ago</span>
        </div>
        <span>text</span>
      </div>
    </div>
  )
}
