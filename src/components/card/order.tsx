import React from 'react'

const OrderOverview = () => {
    return (
        <div className='w-full bg-white p-2 px-5 rounded-md my-2 shadow-sm'>
            <span className='w-full flex justify-between text-[12px]'>
                <p>Order ID</p>
                <p>8-06-2024</p>
            </span>
            <div>
                <p className='overflow-hidden text-ellipsis line-clamp-2 py-1 text-sm'>
                    Products name, Products name, products name, the product name is the longest of all and it starts and ends after 365 days of coding and writing enought code
                </p>
                <div className='h-[6rem] flex justify-start items-center'>
                    <img src="hht" alt="image" className='w-[10rem] h-full bg-white' />
                    <div className='w-full h-full flex flex-col justify-end items-start p-1 text-sm ml-3'>
                        <p>Items: 2</p>
                        <p>Placed on: 8-06-2024</p>
                        <p className='font-semibold'>Paid: Ghc120.00</p>
                        <div className='font-semibold p-1 bg-blue-500 rounded-md text-[12px] px-2 scale-95'>Waiting to be shipped</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderOverview