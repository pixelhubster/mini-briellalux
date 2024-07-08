import React from 'react'

const ShippingaddressCard = () => {
    return (
        <div className='w-full bg-white p-2 rounded-md flex flex-col m-2 mx-0 shadow-md cursor-pointer shrink-0'>
            <div className='text-sm text-slate-600 p-2 px-3 border-b-2 border-solid border-slate-300 flex justify-between items-center'>
                Shipping Address
                <div className='bg-slate-50 text-[13px] h-[1.5rem] flex justify-start items-center p-1 px-3 cursor-pointer hover:underline text-slate-600 overflow-hidden whitespace-nowrap'>Remove</div>
            </div>
            <div className='flex'>
                <div className='w-full h-full bg-red-00 flex flex-col justify-start items-start text-sm  p-2 px-3'>
                    <p>Noble Nyuiela Kuadugah</p>
                    {/* <p>Vivian Farm</p> */}
                    <p>Greater Accra, Ghana</p>
                    <p>Vivian Farm, Lashibi GT-350-7723</p>
                    <p>+233 559 761 460</p>
                </div>
                {/* <div className='w-full h-full bg-red-00 flex flex-col justify-start items-start text-sm  p-2 px-3'>
                    <p>Noble Nyuiela Kuadugah</p>
                    <p>Vivian Farm</p>
                    <p>Sakumono, Greater Accra</p>
                    <p>+233 559 761 460</p>
                </div> */}
            </div>
        </div>
    )
}

export default ShippingaddressCard