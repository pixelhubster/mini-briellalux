"use client"
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Profile from '../boards/profile'
import SettingBoard from '../boards/settingBoard'
import OrderBoard from '../boards/orderBoard'
import NotificationBoard from '../boards/notificationBoard'

const UserCard = ({name, email}: {name: string|null|undefined, email:string|null|undefined}) => {
    const loggedIn = name && email
    const router = useRouter()
    const [opened, setOpened] = useState<boolean>(false)
    const [tab, setTab] = useState<number>(0)
    const clickOpen = (n: number) => {
        setTab(n)
        setOpened(true)
    }
    return (
        <div className='w-[17rem] bg-red-400 absolute right-10 top-[4.5rem] shadow-md rounded-md overflow-hidden pt-3'>
            {loggedIn ? (
                <div>
                    <div className='w-full h-fit text-[16px] bg-green-400 p-2 px-5'>
                        <h1 className='font-semibold'>Welcome, {name}</h1>
                        <h1 className='text-sm'>{email}</h1>
                    </div>
                    <button className='w-full h-[2.5rem] text-[16px] bg-blue-500 flex px-5 items-center' onClick={()=>clickOpen(1)}>Orders</button>
                    <button className='w-full h-[2.5rem] text-[16px] bg-green-200 flex px-5 items-center' onClick={()=>clickOpen(0)}>Settings</button>
                    <button className='w-full h-[2.5rem] text-[16px] bg-yellow-200 flex px-5 items-center' onClick={()=>clickOpen(2)}>Notification</button>
                    <button className='w-full h-[3rem] text-[16px] bg-blue-200' onClick={() => signOut({redirect: false})}>SignOut</button>
                    { opened && (
                        <Profile fn={() => setOpened(false)} tabNumber={tab}>
                            <SettingBoard />
                            <OrderBoard />
                            <NotificationBoard />
                        </Profile>
                    )}
                </div>
            ): (
                <button className='w-full h-[2.5rem] flex justify-center items-center text-[16px] bg-white' onClick={() => router.push("/signin")}>login</button>
            )}
        </div>
    )
}

export default UserCard