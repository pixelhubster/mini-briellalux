import React from 'react'
import ShippingaddressCard from '../card/shippingAddressCard'

const SettingBoard = () => {
    return (
        <div className='w-full h-full pb-[3rem] bg-green-200 p-5 text-sm'>
            <p className='mt-3 mb-2'>User Information</p>
            <div className='flex'>
                <input type="text" name="name" id="" placeholder='Firstname' className='w-1/2 p-2 m-1 rounded-sm' />
                <input type="text" name="name" id="" placeholder='lastname' className='w-1/2 p-2 m-1 mr-0 rounded-sm' />
            </div>
            <div className='flex'>
                <input type="text" name="name" id="" placeholder='Email Address' className='w-1/2 p-2 m-1 rounded-sm' />
                <input type="text" name="name" id="" placeholder='Phone Number' className='w-1/2 p-2 m-1 mr-0 rounded-sm' />
            </div>
            <input type="email" name="name" id="" placeholder='Email Address' className='w-full p-2 m-1 rounded-sm' />
            <p className='mt-5 mb-2'>Shipping Address</p>
            <ShippingaddressCard />
            <ShippingaddressCard />
            <input type="email" name="name" id="" placeholder='Full name' className='w-full p-2 m-1 rounded-sm' required />
            <div className='flex'>
                <input type="text" value={"Ghana"} name="name" id="" placeholder='Country' className='w-1/2 p-2 m-1 rounded-sm' required />
                <input type="text" name="name" id="" placeholder='State' className='w-1/2 p-2 m-1 mr-0 rounded-sm' required />
                <input type="text" name="name" id="" placeholder='City' className='w-1/2 p-2 m-1 mr-0 rounded-sm' required />
            </div>
            <input type="email" name="name" id="" placeholder='Address 1' className='w-full p-2 m-1 rounded-sm' required />
            <input type="email" name="name" id="" placeholder='Address 2' className='w-full p-2 m-1 rounded-sm' required />
            <div className='flex'>
                <input type="text" name="name" id="" placeholder='Phone number' className='w-1/2 p-2 m-1 rounded-sm' required />
                <input type="text" name="name" id="" placeholder='Alt Phone number' className='w-1/2 p-2 m-1 rounded-sm' required />
            </div>
            <div className='relative w-full '>
                <button className='p-1 px-10 bg-blue-300 rounded-md absolute right-0 mr-5'>Add</button>
            </div>

        </div>
    )
}

export default SettingBoard