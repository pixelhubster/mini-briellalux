"use client"
import { useAppDispatch } from '@/lib/redux/hooks'
import React, { useState } from 'react'
import { toggle } from '@/lib/redux/features/model-slice';
import { FaHeart } from 'react-icons/fa6';
import Saved from '../saved';
import { useRouter } from 'next/navigation';


const SaveIcon = () => {
  const router = useRouter()
  return (
    <>
    
    <div className='px-5 cursor-pointer'
      onClick={() => router.push("/saved")
      }
        ><FaHeart /></div>
    </>
  )
}

export default SaveIcon