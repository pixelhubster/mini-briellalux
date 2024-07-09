"use client"
import { changeQuantity, removeFromCart } from '@/lib/redux/features/cart-slice'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { useRouter } from 'next/navigation'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'


type SaveArg = {
    _id: string,
    price: number,
    name: string,
    images: string[],
}
const CartCard: React.FC<SaveArg> = ({ _id, price, name, images}) => {
    const cart = useAppSelector((state) => state.cartReducer.value)
    const index = cart.products.findIndex(prod => prod._id === _id)
    const currentqty = useRef(index !== -1 ? cart.products[index].qty : 0)
    const [quan, setQuan] = useState(currentqty.current)
    const router = useRouter()
    const dispatch = useAppDispatch()
    const add = () => {
        currentqty.current >= 1 ? currentqty.current++ : currentqty.current = 1
        dispatch(changeQuantity({_id, qty: currentqty.current}))
        setQuan(cart.products[index].qty)
    }
    const sub = () => {
        currentqty.current > 1 ? currentqty.current-- : currentqty.current = 1
        dispatch(changeQuantity({_id, qty: currentqty.current}))
        setQuan(cart.products[index].qty)
    }
    const clickRemove = () => {
        dispatch(removeFromCart(_id))
        router.refresh()
    }
    return (
        <div className='w-full h-fit flex flex-col justify-start bg-white shadow-0 border-2 border-solid border-slate-400 rounded-sm my-2 pb-3'>
            <div className='flex justify-between items-center p-2'>
                <div className='text-sm text-ellipsis overflow-hidden w-[8rem]'>#{_id}</div>
                <button className='p-1 text-sm px-2 flex justify-center items-center bg-orange-00 rounded-md  text-orange-400 hover:underline' onClick={clickRemove}>Remove</button>
            </div>
            {/* <div className='flex justify-between items-center p-2'>
                <div>To be Delivered between 20th Jan and 23 Jan</div>
                <div className='bg-slate-50 text-[13px] h-[1.5rem] flex justify-start items-center p-1 px-3 cursor-pointer hover:underline text-slate-600 overflow-hidden whitespace-nowrap'>View</div>
            </div> */}
            <div className='h-fit flex justify-start items-center'>
                <img src={images[0]} alt="image" className='w-[14rem] h-full bg-white' />
                <div className='w-full h-full flex flex-col justify-start items-start p-1 text-sm'>
                    <p className='font-semibold'>{name}</p>
                    <p>QTY: 1</p>
                    <p className='font-semibold'>Ghc {price}</p>
                    <p>Quantity</p>
                    <div className='flex h-fit'>
                        <button className='p-1 px-2 bg-blue-300 rounded-sm' onClick={add}>+</button>
                        <div className='px-3 flex h-[content] bg-red-00 justify-center items-center'>{currentqty.current}</div>
                        <button className='p-1 px-2 bg-blue-300 rounded-sm' onClick={sub}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard