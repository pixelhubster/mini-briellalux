import React from 'react'

type IProps = {
    total: number,
    shipping_fees: number,
}

const SummaryCard: React.FC<IProps> = ({ total, shipping_fees}) => {
    return (
        <div className='w-full px-5 py-2 border-2 border-solid border-slate-300'>
            {/* <div className='w-full bg-red-00 py-4 flex justify-between'>
                <div className='w-[20rem] bg-green-00 py-2'>
                    <div className='flex py-1 text-slate-500'>Product Name<p className='text-black'>Unique USB</p></div>
                    <div className='flex py-1 text-slate-500'>Quantity<p className='text-black'>x 1</p></div>
                    <div className='flex py-1 text-slate-500'>Price<p className='text-black'>Ghc 100.00</p></div>
                </div>
                <div className='w-[20rem] bg-green-00 py-2'>
                    <div className='flex py-1 text-slate-500'>Product Name<p className='text-black'>Unique USB</p></div>
                    <div className='flex py-1 text-slate-500'>Quantity<p className='text-black'>x 1</p></div>
                    <div className='flex py-1 text-slate-500'>Price<p className='text-black'>Ghc 100.00</p></div>
                </div>
            </div> */}
            <div className='w-full bg-green-00 py-2'>
                {/* <div className='flex py-1 text-slate-500'>Delivery Type<p className='text-black'>Express</p></div>
                <div className='flex py-1 text-slate-500'>Delivery Address:<p className='text-black'>Abeka</p></div> */}
                <div className='flex py-1 text-slate-500'>Delivery Fees<p className='text-black'>Ghc {shipping_fees}</p></div>
                <div className='flex py-1 p-2'>Subtotal Ghc &nbsp; <p className='text-black font-semibold'>{total.toFixed(2)}</p></div>
                <div className='w-full flex justify-center items-center bg-slate-200 p-2'>Overall Total Ghc &nbsp; <p className='text-black font-semibold'>{(total + shipping_fees).toFixed(2)}</p></div>
            </div>
        </div>
    )
}

export default SummaryCard