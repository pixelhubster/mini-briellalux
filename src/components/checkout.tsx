"use client"
import { useAppSelector } from '@/lib/redux/hooks'
import React, { useState } from 'react'
import PaymentInstructionBoard from './boards/paymentInstruction'
import CheckoutCard from './card/checkoutCard'
import SummaryCard from './card/summaryCard'

const Checkout = () => {
    const [opened, setOpened] = useState<boolean>(false)
    const checkout = useAppSelector((state) => state.checkoutReducer.value)
    return checkout.products.length !== 0 ? <>
        {checkout.products.map((prod, key) => (
            <CheckoutCard {...prod} key={key} />
        ))}
        <div className='w-full px-5 py-2 border-2 border-solid border-slate-300 customgridorders'>
            {/* <ChooseShippingCard />
        <ChooseShippingCard /> */}
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