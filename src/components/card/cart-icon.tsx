"use client"
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';


const CartIcon = () => {
    const router = useRouter()
  return (
    <>
    
    <div className='px-5 cursor-pointer'  onClick={() => router.push("/cart")}
        ><FaShoppingCart /></div>
    </>
  )
}

export default CartIcon