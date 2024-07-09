"use client"
import React, { ChangeEvent, useEffect, useState } from 'react'
import ShippingaddressCard from '../card/shippingAddressCard'
import { useSession } from 'next-auth/react'
import Shipping from "@/lib/mongodb/shipping"
import connectMongoDB from '@/lib/mongodb'
import { IShipping } from '@/lib/type'

async function getAddress() {
    try {
        const res = await fetch("http://localhost:3000/api/shipping", {
            method: "GET"
        }).then(res => res.json())
        return res
    } catch(error) {
        console.log(error)
    }
}

const SettingBoard = () => {
    const { data } = useSession()
    const user = data?.user
    const name = user?.name?.split(" ") ?? []
    const [dbAddress, setDbaddress] = useState<IShipping[]>([])
    useEffect(() => {
        async function get(){
            setDbaddress(await getAddress())
        }
        get()
    }, [])
    const [address, setAddress] = useState({
        name: "",
        state: "",
        city: "",
        address: "",
        altaddress: "",
        phonenumber: 0,
        altphonenumber: 0
    })
    const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = e.target
        setAddress({
            ...address,
            [name]: value,
        })
    }
    const addAddress = async (e: any) => {
        e.preventDefault()
        const res = await fetch("http://localhost:3000/api/shipping", {
            method: 'POST',
            body: JSON.stringify(address)
        })
        // return res.ok
    }
    return (
        <div className='w-full h-full pb-[3rem] bg-green-200 p-5 text-sm'>
            <div className='mt-3 mb-2 flex justify-between'>
                <p>User Information</p>
                <button>Edit</button>
            </div>
            <div className='flex'>
                <input type="text" value={name[0]} name="name" id="" placeholder='Firstname' className='w-1/2 p-2 m-1 rounded-sm' />
                <input type="text" value={name[1]} name="name" id="" placeholder='lastname' className='w-1/2 p-2 m-1 mr-0 rounded-sm' />
            </div>
            <div className='flex'>
                <input type="text" value={user?.email ?? ""} name="name" id="" placeholder='Email Address' className='w-1/2 p-2 m-1 rounded-sm' />
                <input type="text" value={user?.number ?? ""} name="name" id="" placeholder='Phone Number' className='w-1/2 p-2 m-1 mr-0 rounded-sm' />
            </div>
            {/* <input type="email" name="name" id="" placeholder='Email Address' className='w-full p-2 m-1 rounded-sm' /> */}
            <button className='p-2 self-end  m-1 px-5 bg-blue-300 rounded-md'>Save</button>
            <p className='mt-5 mb-2'>Shipping Address</p>
            {dbAddress.map((addr, key) => (
                <ShippingaddressCard {...addr} key={key}/>
            ))}
            {/* <ShippingaddressCard /> */}
            <form action="" onSubmit={addAddress}>
                <input type="text" name="name" id="" placeholder='Full name' className='w-full p-2 m-1 rounded-sm' onChange={handleChange} required />
                <div className='flex'>
                    {/* <input type="text" name="country" id="" placeholder='Country' className='w-1/2 p-2 m-1 rounded-sm' onChange={handleChange} required /> */}
                    <input type="text" name="state" id="" placeholder='State' className='w-1/2 p-2 m-1 mr-0 rounded-sm' onChange={handleChange} required />
                    <input type="text" name="city" id="" placeholder='City' className='w-1/2 p-2 m-1 mr-0 rounded-sm' onChange={handleChange} required />
                </div>
                <input type="text" name="address" id="" placeholder='Address 1' className='w-full p-2 m-1 rounded-sm' onChange={handleChange} required />
                <input type="text" name="altaddress" id="" placeholder='Address 2' className='w-full p-2 m-1 rounded-sm' onChange={handleChange} required />
                <div className='flex'>
                    <input type="text" name="phonenumber" id="" placeholder='Phone number' className='w-1/2 p-2 m-1 rounded-sm' onChange={handleChange} required />
                    <input type="text" name="altphonenumber" id="" placeholder='Alt Phone number' className='w-1/2 p-2 m-1 rounded-sm' onChange={handleChange} required />
                </div>
                <div className='relative w-full'>
                    <button className='p-1 px-10 bg-blue-300 rounded-md absolute right-0 mr-5'>Add</button>
                </div>

            </form>

        </div>
    )
}

export default SettingBoard