"use client"
import React, { useEffect, useState } from 'react'
import CartCard from './card/cartcard'
import Modal from './card/modal'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { useRouter } from 'next/navigation'
import { addToCheckoutDB, IProductCheckout } from '@/lib/redux/features/checkout-slice'

const getProducts = async (id: { _id: string, qty: number }[]) => {
    let idStack: string[] = []
    id.forEach((prod) => {
        idStack.push(prod._id)
    })
    try {
        const products = await fetch(`http://localhost:3000/api/product?id=${idStack}`, {
            cache: 'no-cache',
        })
        if (!products.ok) throw new Error("Failed to Fetch data")
        let newprod: IProductCheckout[] = []
        for (const item of await products.json()) {
            for (const value of id) {
                if (item._id === value._id) {
                    newprod.push({ ...item, qty: value.qty })
                }
            }

        }
        return newprod
    } catch (error) {
        console.log(error)
    }
}

const Cart = ({ fn }: { fn: Function }) => {
    const value = useAppSelector((state) => state.cartReducer.value)
    const [products, setProducts] = useState<IProductCheckout[]>([])
    const router = useRouter()
    const dispatch = useAppDispatch()
    const checkout = useAppSelector((state) => state.checkoutReducer.value)
    const ClickCheckout = async () => {
        dispatch(addToCheckoutDB(value.products))
        router.push("http://localhost:3000/checkout")
    }
    useEffect(() => {
        async function get() {
            value.products.length !== 0 ? setProducts(await getProducts(value.products) as IProductCheckout[]) : setProducts([])
        }
        get()
        router.refresh()
    }, [value])
    return (
        <Modal fn={fn}>
            <div className='bg-red-00 w-[40rem] h-[40rem] max-sm:w-full max-sm:m-3 rounded-md overflow-hidden'>
                <div className=' flex justify-center items-center p-2 bg-red-500 border-2 border-solid border-gray-400'>Cart</div>
                <div className='w-full h-full pb-[5rem] bg-green-200 p-4 overflow-auto'>
                    {products.map((prod, key) => (
                        <CartCard {...prod} key={key} />
                    ))}
                    <button className="w-full bg-blue-500/80 p-2 rounded-sm my-2 hover:bg-blue-500 text-md" onClick={ClickCheckout}>
                        Checkout
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default Cart