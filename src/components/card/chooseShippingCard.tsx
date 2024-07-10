"use client"
import { IShipping } from '@/lib/type';
import React, { useState } from 'react'
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md";

interface chooseShippingProps extends IShipping {
    fn: Function
}

const ChooseShippingCard: React.FC<chooseShippingProps> = ({ _id, userid, name, state, city, phonenumber, altphonenumber, address, altaddress, fn, }) => {
    const [selected, setSelected] = useState(false)
    return (
        <div className='w-full h-fit bg-white p-2 pb-0 mb-1 rounded-md flex flex-col cursor-pointer shrink-0 border-2 border-solid border-slate-300'>
            <div className='text-sm text-slate-600 p-2 px-3 border-b-2 border-solid border-slate-300 flex justify-between items-center'>
                <div className='h-full flex items-center'>
                    <input type="radio" key={_id} name="shipping" id={_id} value={name} className='' onClick={() => fn(_id)} onSelect={() => fn(_id)} />
                    <p className='mx-2'>{name}</p>
                </div>
                <div className='text-xl'>

                    {selected ?
                        <MdKeyboardDoubleArrowUp onClick={() => setSelected(false)} />
                        : <MdKeyboardDoubleArrowDown onClick={() => setSelected(true)} />
                    }
                </div>
            </div>
            <div className={`${selected ? "flex" : "hidden"}`}>
                <div className='w-full h-full bg-red-00 flex flex-col justify-start items-start text-sm  p-2 px-3'>
                    <p>{name}</p>
                    <p>{city}, {state}</p>
                    <p>{address}</p>
                    <p>{altaddress}</p>
                    <p>+233 {phonenumber}, +233 {altphonenumber}</p>
                </div>
            </div>
        </div>
    )
}

export default ChooseShippingCard