"use client"
import React from 'react'
import { FaUser } from "react-icons/fa";
import SaveIcon from './card/save-icon';
import CartIcon from './card/cart-icon';

const Navbar = () => {
  return (
    <div className="w-full h-[4rem] bg-red-200 px-5 flex justify-between items-center">
      logo and name
      <div className="flex bg-green-00 p-2 text-xl">
        <SaveIcon />
        <CartIcon />
        <div className='px-5 cursor-pointer'><FaUser /></div>
      </div>
    </div>
  )
}

export default Navbar