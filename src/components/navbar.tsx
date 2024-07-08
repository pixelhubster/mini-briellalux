"use client"
import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import SaveIcon from './card/save-icon';
import CartIcon from './card/cart-icon';
import { useSession } from 'next-auth/react';
import UserCard from './card/user-card';
import Profile from './boards/profile';

const Navbar = () => {
  const {data} = useSession()
  const [opened, setOpened] = useState(false)
  console.log(data)
  return (
    <div className="w-full h-[4rem] bg-red-200 px-5 flex justify-between items-center">
      logo and name
      <div className="flex bg-green-00 p-2 text-xl">
        <SaveIcon />
        <CartIcon />
        <div className='px-5 cursor-pointer' onClick={() => setOpened(!opened)}><FaUser /></div>
        {opened && (
          <UserCard name={data?.user?.name} email={data?.user?.email} />
        )}
      </div>
    </div>
  )
}

export default Navbar