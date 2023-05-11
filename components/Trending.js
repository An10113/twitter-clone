import { BadgeCheckIcon, DotsHorizontalIcon, SearchIcon } from "@heroicons/react/outline";

export default function Trending() {
  return (
    <div className="hidden lg:flex flex-col mt-4 ml-5">
      <div className="flex space-x-3 p-3
      bg-white bg-opacity-10 h-[44px]
      w-[300px]p-3 rounded-3xl">
        <SearchIcon className="w-6 text-gray-600 "/>
        <input 
        className="bg-transparent 
        focus:outline-none 
        placeholder:text-gray-600"
        placeholder="Search Twitter"
        type="text" />
      </div> 
      <div className="w-[300px] h-[500px] mt-3
      bg-white bg-opacity-10 rounded-3xl ">
        <h1 className="font-bold text-xl p-3">What's happening</h1>
        <TopSearch title={'China'} para={'500k tweets'}/>
        <TopSearch title={'COVID-19'} para={'740k tweets'}/>
        <TopSearch title={'Football'} para={'300k tweets'}/>
        <TopSearch title={'Marvel'} para={'1M tweets'}/>
        <TopSearch title={'John Cena'} para={'560k tweets'}/>
      </div>
      <div className="w-[300px] h-[300px] mt-3 bg-white bg-opacity-10 rounded-3xl ">
        <h1 className="font-bold text-xl p-3">Who to follow</h1>
        <TopFollow img={"/assets/bragg.png"} name={"David Bragg"} name2={"@davidbragg"}/>
        <TopFollow img={"/assets/bragg.png"} name={"David Bragg"} name2={"@davidbragg"}/>
        <TopFollow img={"/assets/bragg.png"} name={"David Bragg"} name2={"@davidbragg"}/>
      </div>
    </div>
  )
}

function TopSearch({title,para}){
  return(
  <div className="relative p-3">
  <DotsHorizontalIcon className="w-5 text-gray-600 right-4 absolute" />
  <p className="text-xs text-gray-500">Trend in US</p>
  <h1 className="text-base font-bold">{title}</h1>
  <p className="text-xs text-gray-500">{para}</p>
</div>
  )
}

function TopFollow({img, name, name2 }){
  return(
    <div className="flex justify-between p-3 items-center">
    <div className="flex space-x-3">
      <img  
      className="w-11 h-11 object-cover rounded-full"
      src={img}
      />
      <div>
        <div className="flex space-x-1 ">
          <h1 className="font-bold text-sm">{name}</h1>
          <BadgeCheckIcon className="w-[18px] text-blue-400" />
        </div>
          <h1 className="text-[12px]">{name2}</h1>
      </div>
    </div>
    <button className="h-8 w-20 bg-white text-black font-bold text-sm rounded-3xl">Follow</button>
  </div>
  )
}
