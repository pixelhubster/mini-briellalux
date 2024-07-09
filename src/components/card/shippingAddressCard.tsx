import { IShipping } from '@/lib/type'
import React from 'react'

const removeItem =  async (id: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/shipping?id=${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => res.json())
        // return res
    } catch(error) {
        console.log(error)
    }
}
const ShippingaddressCard: React.FC<IShipping> = ({_id, userid, name, state, city, phonenumber, altphonenumber, address, altaddress}) => {
    
    return (
        <div className='w-full bg-white p-2 rounded-md flex flex-col m-2 mx-0 shadow-md cursor-pointer shrink-0'>
            <div className='text-sm text-slate-600 p-2 px-3 border-b-2 border-solid border-slate-300 flex justify-between items-center'>
                Shipping Address
                <div className='bg-slate-50 text-[13px] h-[1.5rem] flex justify-start items-center p-1 px-3 cursor-pointer hover:underline text-slate-600 overflow-hidden whitespace-nowrap' 
                onClick={() => removeItem(_id)}>Remove</div>
            </div>
            <div className='flex'>
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

export default ShippingaddressCard