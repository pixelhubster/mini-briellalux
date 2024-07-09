"use client"
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import CartCard from './card/cartcard'
import Modal from './card/modal'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { useRouter } from 'next/navigation'
import { addToCheckoutDB, IProductCheckout } from '@/lib/redux/features/checkout-slice'
import { IProduct } from '@/lib/type'

const getProducts = async (id: { _id: string, qty: number }[]) => {
    let idStack: string[] = []
    id.forEach((prod) => {
        idStack.push(prod._id)
    })
    try {
        const products = await fetch(`http://localhost:3000/api/product?id=${idStack}`, {
            cache: 'no-cache',
        }).then((res) => res.json()).then(res => res)
        // if (!products.ok) throw new Error("Failed to Fetch data")
        // let newprod: IProductCheckout[] = []
        // for (const item of await products.json()) {
        //     for (const value of id) {
        //         if (item._id === value._id) {
        //             newprod.push({ ...item, qty: value.qty })
        //         }
        //     }

        // }
        // return newprod
        console.log(products)
        return products
    } catch (error) {
        console.log(error)
    }
}

const Cart = ({ fn }: { fn: Function }) => {
    const value = useAppSelector((state) => state.cartReducer.value)
    const [products, setProducts] = useState<IProduct[]>([])
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
    }, [value.products])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const newlist: IProductCheckout[] = []
    const condensed = value.products.forEach(cartprod => products.forEach(stateprod => cartprod._id === stateprod._id && newlist.push({ ...stateprod, ...cartprod })))
    const total = useMemo(() => {
        let sum = 0
        newlist.forEach(list => sum += list.qty * list.price)
        return sum
    }, [newlist])
    return (
        <Modal fn={fn}>
            <div className='bg-red-00 w-[40rem] max-sm:w-full max-sm:m-3 rounded-md overflow-hidden'>
                <div className=' flex justify-center items-center p-2 bg-red-500 border-2 border-solid border-gray-400'>Cart</div>
                <div className='w-full h-full pb-[1rem] bg-green-200 p-4 overflow-auto'>
                    {products.map((prod, key) => (
                        <CartCard {...prod} key={key} />
                    ))}
                    <button className="w-full bg-blue-500/80 p-2 rounded-sm my-2 hover:bg-blue-500 text-md" onClick={ClickCheckout}>
                        Checkout
                        <br />
                        <p className='text-sm'>Subtotal &nbsp;
                            <b className='text-sm'>
                                {total.toFixed(2)}
                            </b>
                            &nbsp;Ghc
                        </p>
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default Cart