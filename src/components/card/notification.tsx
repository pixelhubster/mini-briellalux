import React from 'react'

const NotificationCard = () => {
    return (
        <div className='w-full bg-white p-2 px-5 rounded-md my-2 shadow-sm'>
            <span className='w-full flex justify-between text-[12px]'>
                {/* <p>Order ID</p> */}
                <p>8-06-2024</p>
            </span>
            <p className='overflow-hidden text-ellipsis line-clamp-2 font-semibold text-[14px]'>
                Confirmed
            </p>
            <div>
                <p className='overflow-hidden py-1 text-[14px]'>
                    Products name, Products name, products name, the product name is the longest of all and it starts and ends after 365 days of coding and writing enought code
                </p>
            </div>
        </div>
    )
}

export default NotificationCard