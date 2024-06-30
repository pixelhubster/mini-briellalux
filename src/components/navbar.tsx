"use client"
import React, { useState } from 'react'
import Cart from './cart'
import Saved from './saved'
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


const Navbar = () => {
  const [saved, setSaved] = useState<boolean>(false)
  const [cart, setCart] = useState<boolean>(false)
  return (
    <div className="w-full h-[4rem] bg-red-200 px-5 flex justify-between items-center">
      logo and name
      <div className="flex bg-green-00 p-2 text-xl">
        <div className='px-5 cursor-pointer'  onClick={() => setSaved(true)}><FaHeart /></div>
        <div className='px-5 cursor-pointer' onClick={() => setCart(true)}><FaShoppingCart /></div>
        <div className='px-5 cursor-pointer'><FaUser /></div>
        {saved && <Saved/>}
        {cart && <Cart />}
      </div>
    </div>
  )
}

export default Navbar