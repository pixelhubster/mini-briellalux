"use client"
import { useAppSelector } from '@/lib/redux/hooks'
import React, { useEffect, useState } from 'react'
import PaymentInstructionBoard from './boards/paymentInstruction'
import CheckoutCard from './card/checkoutCard'
import SummaryCard from './card/summaryCard'
import ChooseShippingCard from './card/chooseShippingCard'
import { IShipping } from '@/lib/type'
async function getAddress() {
    try {
        const res = await fetch("http://localhost:3000/api/shipping", {
            method: "GET"
        }).then(res => res.json())
        return res
    } catch(error) {
        console.log(error)
    }
}
const Checkout = () => {
    const [opened, setOpened] = useState<boolean>(false)
    const checkout = useAppSelector((state) => state.checkoutReducer.value)
    const [selectedAddress, setSelected] = useState<string>("")
    const [dbAddress, setDbaddress] = useState<IShipping[]>([])
    useEffect(() => {
        async function get(){
            setDbaddress(await getAddress())
        }
        get()
    }, [])
    return checkout.products.length !== 0 ? <>
        {checkout.products.map((prod, key) => (
            <CheckoutCard {...prod} key={key} />
        ))}
        <div className='w-full px-1 py-2 border-0 border-solid border-slate-300 customgridorders'>
        {dbAddress.map((address, key) => (
            <ChooseShippingCard {...address} fn={(id: string) => setSelected(id)} key={key}/>
        ))}
        
        </div>
        <SummaryCard total={checkout.total} shipping_fees={20} />
        <button className='w-full bg-blue-400 rounded-md p-2 font-semibold my-5 text-white' onClick={() => setOpened(true)}>Proceed to Pay</button>
        {
            opened && (
                <PaymentInstructionBoard fn={() => setOpened(false)} />
            )
        }
    </> : (
        <div className='w-full flex items-center justify-center'>no item in checkout</div>
    )
}

export default Checkout