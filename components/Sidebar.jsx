import React from 'react'
import {
    HomeIcon, HashtagIcon, UserIcon, InboxIcon,BookmarkIcon,
    ClipboardListIcon, BellIcon, DotsCircleHorizontalIcon
} from "@heroicons/react/outline"

export default function Sidebar() {
  return (
    <div className='xl:ml-16 h-full hidden sm:flex flex-col fixed'>
        <nav className='h-full xl:space-y-1.5 relative'>
        <div className='py-3 xl:p-3 flex justify-center items-center xl:justify-start'>
            <img src={"/assets/twitter-logo.png"} width={34} height={34}  />
        </div>
            <SidebarLink Icon={HomeIcon} text={"Home"}/>
            <SidebarLink Icon={HashtagIcon} text={"Explore"}/>
            <SidebarLink Icon={BellIcon} text={"Notification"}/>
            <SidebarLink Icon={InboxIcon} text={"Messages"}/>
            <SidebarLink Icon={BookmarkIcon} text={"Bookmarks"}/>
            <SidebarLink Icon={UserIcon} text={"Profile"}/>
            <SidebarLink Icon={DotsCircleHorizontalIcon} text={"More"}/>
            <button className='hidden xl:inline bg-[#1d9bf0]
            rounded-full mt-2 h-[50px] text-lg font-bold w-[200px]'>
                Tweet
            </button>
        <div className='absolute bottom-0'>
            Users
        </div>
        </nav>
    </div>

  )
}
function SidebarLink({Icon, text}){
    return(
        <li className='hoverAnimation xl:justify-start flex mb-3 space-x-3 justify-center item-center text-xl'>
            <Icon className="h-7"/>
            <span className='hidden xl:inline'>
            {text}
            </span>
        </li>
    )
}