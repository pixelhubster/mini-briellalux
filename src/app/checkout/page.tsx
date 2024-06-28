import CheckoutCard from '@/components/card/checkoutCard'
// import ChooseShippingCard from '@/components/cards/chooseShippingCard'
import OrderCard from '@/components/card/orderCard'
// import ShippingaddressCard from '@/components/cards/shippingaddressCard'
import SummaryCard from '@/components/card/summaryCard'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='w-full h-full flex justify-center items-center bg-slate-50'>
                <div className='md:w-[50rem] w-full bg-white m-5 mt-10 p-2 flex flex-col items-center rounded-md shadow-md'>
                    <div className='bg-slate-100 h-[5rem] p-2 min-w-[10rem] mt-5 flex justify-center items-center'>image</div>
                    <h6 className='text-xl font-semibold p-5'>Checkout</h6>
                    <div className='w-full px-10 max-sm:px-2'>
                        <CheckoutCard />
                        <CheckoutCard />
                        <div className='w-full px-5 py-2 border-2 border-solid border-slate-300 customgridorders'>
                            {/* <ChooseShippingCard />
                            <ChooseShippingCard /> */}
                        </div>
                        <SummaryCard />
                        <button className='w-full bg-blue-400 rounded-md p-2 font-semibold my-5 text-white'>Proceed to Pay</button>
                    </div>
                </div>

            </div>
            <div className='w-full h-[100vh] fixed bg-white/30 backdrop-blur-[1px] flex justify-center items-center z-[10]'>
                <div className='bg-white h-[4rem] w-[6rem]'>a</div>
            </div>
        </>


    )
}

export default page