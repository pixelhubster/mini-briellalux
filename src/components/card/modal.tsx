"use client"
import React, { useState } from 'react'

const Modal = ({children} : {children: React.ReactNode}) => {
    const [close, setClose] = useState<boolean>(false)
  return (
    <div className={`fixed top-0 right-0 w-full h-full backdrop-blur-[1px] bg-white/10 flex justify-center items-start pt-10 ${close ? "hidden": "flex"}`}
    onClick={() => {
        setClose(!open)
    }}
    >
        {children}
    </div>
  )
}

export default Modal