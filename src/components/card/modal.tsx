"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  return (
    // modal.value.opened && (
    <div className={"fixed top-0 right-0 w-full h-full backdrop-blur-[1px] bg-white/10 flex justify-center items-start pt-10 z-[2]"}
      onClick={(e) => e.target === e.currentTarget && router.back()}
    >
      {children}
    </div>
    // )
  )
}

export default Modal