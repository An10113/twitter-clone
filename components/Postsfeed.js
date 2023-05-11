import Tweet from "./Tweet";
import Tweetinput from "./Tweetinput";

export default function Postsfeed() {
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
      <Tweet />
    </div>
  )
}
