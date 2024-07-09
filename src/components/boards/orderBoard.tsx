"use client"
import React, { useEffect, useState } from 'react'
import OrderOverview from '../card/order'
import { IOrder } from '@/lib/type'

async function getOrders() {
    try {
        const res = await fetch("http://localhost:3000/api/orders", {
            method: "GET",
            cache: "no-cache"
        }).then(res => res.json())
        return res
    } catch (error) {
        console.log(error)
    }
}
const OrderBoard = () => {
    const [orders, setOrders] = useState<IOrder[]>([])
    useEffect(() => {
        async function get() {
            setOrders(await getOrders() ?? [])
        }
        get()
    }, [])
    return (
        <div className='w-full h-full pb-[3rem] bg-green-200 p-5'>
            {
                orders.map((order, key) => (
                    <OrderOverview {...order} key={key} />
                ))
            }
        </div>
    )
}

export default OrderBoard