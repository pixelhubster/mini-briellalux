import React from 'react'
import OrderOverview from '../card/order'

const OrderBoard = () => {
    return (
        <div className='w-full h-full pb-[3rem] bg-green-200 p-5'>
            <OrderOverview />
            <OrderOverview />
            <OrderOverview />
            <OrderOverview />
        </div>
    )
}

export default OrderBoard