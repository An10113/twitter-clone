import { ChartBarIcon, ChatIcon, HeartIcon, UploadIcon } from "@heroicons/react/outline"


export default function Tweet({data}) {

  return (
    <div className="border-b border-gray-700">
        <Tweetheader
        photoUrl={data?.photoUrl} 
        username={data?.username} 
        name={data?.name} 
        // timestamp={timestamp} 
        tweet={data?.tweet}/>
        <div className="p-3 ml-16 text-gray-500 flex space-x-12">
          <ChatIcon className="w-5 h-5 cursor-pointer hover:text-green-500 "/>
          <HeartIcon className="w-5 h-5 cursor-pointer hover:text-pink-500"/>
          <ChartBarIcon className="w-5 h-5 cursor-not-allowed "/>
          <UploadIcon className="w-5 h-5 cursor-not-allowed "/>
        </div>
    </div>
  )
}

export function Tweetheader({photoUrl,username, name, timestamp, tweet}){
  return(
    <div className="flex space-x-3 p-3">
      <img 
      className="w-11 h-11 rounded-full object-cover"
      src={photoUrl}/>
      <div>
        <div className="flex space-x-2 items-center">
          <h1 className="text-white font-bold">{name}</h1>
          <span>@{username}</span>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <span>{timestamp}</span>
        </div>
        <span>{tweet}</span>
      </div>
    </div>
  )
}
