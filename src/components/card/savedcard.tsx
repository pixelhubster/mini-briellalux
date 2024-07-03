"use client"
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { removeItem } from '@/lib/redux/features/saved-slice'
import { useRouter } from 'next/navigation'
import { addToCart } from '@/lib/redux/features/cart-slice'

type SaveArg = {
    _id: string,
    price: number,
    name: string,
    images: string[]
}

const SavedCard: React.FC<SaveArg> = ({ _id, price, name, images}) => {
    const cart = useAppSelector((state) => state.cartReducer)
    const inCart = cart.value.products.findIndex(id => id._id === _id)
    const isInCart = inCart !== -1
    const dispatch = useAppDispatch()
    const router = useRouter()
    const clickRemove = () => {
        dispatch(removeItem(_id))
        router.refresh()
    }
    const clickAdd = () => {
        dispatch(addToCart({_id, qty: 1}))
        router.refresh()
    }
    return (
        <div className='w-full h-fit flex flex-col justify-start bg-white shadow-0 border-2 border-solid border-slate-400 rounded-sm my-2 pb-3'>
            <div className='flex justify-between items-center p-2'>
                <div className='text-sm'>{_id}</div>
                <button className='p-1 text-sm px-2 flex justify-center items-center bg-orange-00 rounded-md  text-orange-400 hover:underline'
                onClick={clickRemove}>remove</button>
            </div>
            <div className='h-fit flex justify-start items-center'>
                <img src={images[0]} alt="image" className='w-[14rem] h-full bg-white' />
                <div className='w-full h-full flex flex-col justify-start items-start p-1 text-sm'>
                    <p className=''>{name}</p>
                    <p className=''>Ghc {price}</p>
                    {!isInCart &&
                        <button className="bg-blue-500/80 p-1 px-5 rounded-sm my-2 hover:bg-blue-500"
                        onClick={clickAdd}>
                            Add to Cart
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default SavedCard