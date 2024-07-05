"use client"
import React, { useState } from 'react'
import Modal from '../card/modal'

const Profile = () => {
    const [opened, setOpened] = useState(false)
  return (
    <Modal fn={() => setOpened(false)}>
    <div className='bg-red-00 w-[40rem] max-sm:w-full max-sm:m-3 rounded-md overflow-hidden'>
        <div className=' flex justify-center items-center p-2 bg-red-500 border-2 border-solid border-gray-400'>User Profile</div>
        <div className='h-[2.5rem] flex justify-center items-center bg-red-500 border-2 border-solid border-gray-400'>
            <div className='h-full flex justify-start items-end bg-white px-3'>username</div>
            <div className='h-full flex justify-start items-end bg-white px-3'>username</div>
            <div className='h-full flex justify-start items-end bg-white px-3'>username</div>
            <div className='h-full flex justify-start items-end bg-white px-3'>username</div>
        </div>
        <div className='w-full h-full pb-[1rem] bg-green-200 p-4 overflow-auto'>
        
        </div>
    </div>
</Modal>
  )
}

export default Profile