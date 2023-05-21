import React from 'react'
import {
    HomeIcon, HashtagIcon, UserIcon, InboxIcon,BookmarkIcon,
    ClipboardListIcon, BellIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon
} from "@heroicons/react/outline"
import { Icon } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase'
import { signoutUser } from '@/Redux/userSlice'


export default function Sidebar() {
    
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    console.log(user)


    async function handleSignOut(){
        await signOut(auth)
        dispatch(signoutUser())
    }
  return (
    <div className='ml-2 xl:ml-16 h-full hidden sm:flex flex-col fixed'>
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
            rounded-full hover:bg-opacity-80 mt-2 h-[50px] text-lg font-bold w-[200px]'>
                Tweet
            </button>
        <div 
        className='absolute bottom-3 xl:p-3 space-x-3
        rounded-full cursor-pointer
        hover:bg-white hover:bg-opacity-10
        flex justify-center items-center'>
            <img src={user.photoUrl ||'/assets/plain.jpg'} className='w-10 h-10 rounded-full object-cover'/>
            <div className='hidden xl:inline '>
                <h1 className='font-bold whitespace-nowrap'>
                    {user.username}
                </h1>
                <h1 className='text-gray-500'>{`@${user.username}`}</h1>
            </div>
            <DotsHorizontalIcon 
            onClick={handleSignOut}
            className='h-5 font-bold hidden xl:inline' />
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