import React from 'react'

const CartCard = () => {
    return (
        <div className='w-full h-fit flex flex-col justify-start bg-white shadow-0 border-2 border-solid border-slate-400 rounded-sm my-2 pb-3'>
            <div className='flex justify-between items-center p-2'>
                <div>no.23434324</div>
                <button className='p-1 text-sm px-2 flex justify-center items-center bg-orange-00 rounded-md  text-orange-400 hover:underline'>Remove</button>
            </div>
            {/* <div className='flex justify-between items-center p-2'>
                <div>To be Delivered between 20th Jan and 23 Jan</div>
                <div className='bg-slate-50 text-[13px] h-[1.5rem] flex justify-start items-center p-1 px-3 cursor-pointer hover:underline text-slate-600 overflow-hidden whitespace-nowrap'>View</div>
            </div> */}
            <div className='h-fit flex justify-start items-center'>
                <img src="hht" alt="image" className='w-[14rem] h-full bg-white' />
                <div className='w-full h-full flex flex-col justify-start items-start p-1 text-sm'>
                    <p className='font-semibold'>Unique USB Night Light For Computer </p>
                    <p>QTY: 1</p>
                    <p className='font-semibold'>Ghc120.00</p>
                    <p>Quantity</p>
                    <div>
                        <button className='p-1 px-2 bg-blue-300 '>+</button>
                        <input type="number" name="number" id="" className='outline-none bg-gray-300 mx-1 w-[4rem] h-full px-2 font-medium' />
                        <button className='p-1 px-2 bg-blue-300 '>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard