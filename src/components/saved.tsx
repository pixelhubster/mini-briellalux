"use client"
import React from 'react'
import SavedCard from './card/savedcard'
import Modal from './card/modal'
import { useAppSelector } from '@/lib/redux/hooks'
const Saved = () => {
    const value = useAppSelector((state) => state.savedReducer.value)
    console.log(value.products)
    return (
        <Modal>
            <div className='bg-red-00 w-[40rem] h-[40rem] max-sm:w-full max-sm:m-3 rounded-md overflow-hidden'>
                <div className=' flex justify-center items-center p-2 bg-red-500 border-2 border-solid border-gray-400'>Saved</div>
                <div className='w-full h-full pb-[5rem] bg-green-200 p-4 overflow-auto'>
                    {value.products.map((product, key) => (
                        <SavedCard {...product} key={key} />
                    ))}
                </div>
            </div>
        </Modal>
    )
}

export default Saved