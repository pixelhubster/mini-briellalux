"use client"
import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Cart from '../cart';


const CartIcon = () => {
    const [opened, setOpened] = useState<boolean>(false)
  return (
    <>
    
    <div className='px-5 cursor-pointer'  onClick={() => setOpened(true)}
        ><FaShoppingCart />
      </div>
        {opened && <Cart fn={() => setOpened(false)}/>}
    </>
  )
}

export default CartIcon