"use client"
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const UserCard = ({name, email}: {name: string|null|undefined, email:string|null|undefined}) => {
    const loggedIn = name && email
    const router = useRouter()
    return (
        <div className='w-[17rem] bg-red-400 absolute right-10 top-[4.5rem] shadow-md rounded-md overflow-hidden pt-3'>
            {loggedIn ? (
                <div>
                    <div className='w-full h-fit text-[16px] bg-green-400 p-2 px-5'>
                        <h1 className='font-semibold'>Welcome, {name}</h1>
                        <h1 className='text-sm'>{email}</h1>
                    </div>
                    <button className='w-full h-[2.5rem] text-[16px] bg-blue-500 flex px-5 items-center'>Orders</button>
                    <button className='w-full h-[2.5rem] text-[16px] bg-green-200 flex px-5 items-center'>Settings</button>
                    <button className='w-full h-[2.5rem] text-[16px] bg-yellow-200 flex px-5 items-center'>Notification</button>
                    <button className='w-full h-[3rem] text-[16px] bg-blue-200' onClick={() => signOut({redirect: false})}>SignOut</button>
                </div>
            ): (
                <button className='w-full h-[2.5rem] flex justify-center items-center text-[16px] bg-white' onClick={() => router.push("/signin")}>login</button>
            )}
        </div>
    )
}

export default UserCard