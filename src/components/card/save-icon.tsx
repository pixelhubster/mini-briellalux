"use client"
import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa6';
import Saved from '../saved';


const SaveIcon = () => {
  const [opened, setOpened] = useState<boolean>(false)
  return (
    <>
      <div className='px-5 cursor-pointer'
        onClick={() => setOpened(true)}
      ><FaHeart />
      </div>
      {opened && <Saved fn={() => setOpened(false)} />}
    </>
  )
}

export default SaveIcon