"use client"
import React, { useState } from 'react'
import Modal from '../card/modal'
import ShippingaddressCard from '../card/shippingAddressCard'
import OrderOverview from '../card/order'
import NotificationCard from '../card/notification'

const Profile = ({ children, fn, tabNumber }: { children: React.ReactNode, fn: Function, tabNumber?: number }) => {
  const [tab, setTab] = useState<number>(tabNumber ?? 0)
  return (
    <Modal fn={fn}>
      <div className='bg-red-00 w-[40rem] max-sm:w-full max-sm:m-3 rounded-md overflow-hidden'>
        <div className=' flex justify-center items-center p-2 bg-red-500 border-2 border-solid border-gray-400'>User Profile</div>
        <div className='h-[2.5rem] flex justify-start items-center bg-red-500 border-2 border-solid border-gray-400'>
          <button className='h-full flex justify-start items-end bg-white px-3' onClick={() => setTab(0)}>Settings</button>
          <button className='h-full flex justify-start items-end bg-white px-3' onClick={() => setTab(1)}>Orders</button>
          <button className='h-full flex justify-start items-end bg-white px-3' onClick={() => setTab(2)}>Notification</button>
        </div>
        <div className='w-full mb-10 max-h-[70vh] overflow-auto'>
          {(children as [])[tab]}
        </div>
      </div>
    </Modal>
  )
}

export default Profile