"use client"
import React from 'react'
import { FaEye, FaUser } from 'react-icons/fa6'
const Register = () => {
    const url = "https://zouk.co.in/cdn/shop/products/QutubStripes_f8e2b9fe-30a2-4f75-ac39-6bd4dbda46f4.jpg?v=1679041662&width=700"
    return (
        <div className='w-full h-[100vh] bg-white flex'>
            <div style={{ backgroundImage: `url(${url})` }} className='w-full bg-center bg-cover h-full md:flex hidden'></div>
            <div className='w-full h-full bg-slate-50 flex justify-center items-center overflow-hidden'>
                <div className='bg-red-00 h-full w-full p-10 md:pr-20 overflow-y-scroll'>
                    <div className='mb-5'>
                        <div className='h-[5rem]'>image</div>
                        <h6 className='font-semibold text-lg'>Welcome</h6>
                        <p>Join ShoppingSite.com</p>
                    </div>

                    <div className='w-full flex flex-col justify-center mb-5'>
                        <label htmlFor="username" className='text-md text-slate-600 p-1 py-2'>Firstname</label>
                        <div className='lg:w-[80%] w-full h-[2rem] flex justify-start items-center border-solid border-b-2 border-gray-400 active:border-b-blue-400'>
                            <div className='w-fit h-full flex justify-center items-center text-xl'><FaUser /></div>
                            <input type="email" className='h-full bg-transparent w-[90%] outline-none p-2 px-5 text-sm' />
                        </div>
                    </div>

                    <div className='w-full flex flex-col justify-center mb-5'>
                        <label htmlFor="username" className='text-md text-slate-600 p-1 py-2'>Last Name</label>
                        <div className='lg:w-[80%] w-full h-[2rem] flex justify-start items-center border-solid border-b-2 border-gray-400 active:border-b-blue-400'>
                            <div className='w-fit h-full flex justify-center items-center text-xl'><FaUser /></div>
                            <input type="email" className='h-full bg-transparent w-[90%] outline-none p-2 px-5 text-sm' />
                        </div>
                    </div>

                    <div className='w-full flex flex-col justify-center mb-5'>
                        <label htmlFor="username" className='text-md text-slate-600 p-1 py-2'>Email Address</label>
                        <div className='lg:w-[80%] w-full h-[2rem] flex justify-start items-center border-solid border-b-2 border-gray-400 active:border-b-blue-400'>
                            <div className='w-fit h-full flex justify-center items-center text-xl'><FaUser /></div>
                            <input type="email" className='h-full bg-transparent w-[90%] outline-none p-2 px-5 text-sm' />
                        </div>
                    </div>

                    <div className='w-full flex flex-col justify-center mb-5'>
                        <label htmlFor="username" className='text-md text-slate-600 p-1 py-2'>Phone Number</label>
                        <div className='lg:w-[80%] w-full h-[2rem] flex justify-start items-center border-solid border-b-2 border-gray-400 active:border-b-blue-400'>
                            <div className='w-fit h-full flex justify-center items-center text-xl'><FaUser /></div>
                            <input type="tel" className='h-full bg-transparent w-[90%] outline-none p-2 px-5 text-sm' />
                        </div>
                    </div>

                    <div className='w-full flex flex-col justify-center mb-5'>
                        <label htmlFor="username" className='text-md text-slate-600 p-1 py-2'>Choose a Password</label>
                        <div className='lg:w-[80%] w-full h-[2rem] flex justify-start items-center border-solid border-b-2 border-gray-400 active:border-b-blue-400'>
                        <div className='w-fit h-full flex justify-center items-center text-xl'><FaUser /></div>
                            <input type="email" className='h-full bg-transparent w-[90%] outline-none p-2 px-5 text-sm' />
                        </div>
                    </div>

                    <div className='w-full flex flex-col justify-center mb-10'>
                        <label htmlFor="username" className='text-md text-slate-600 p-1 py-2'>Confirm Password</label>
                        <div className='lg:w-[80%] w-full h-[2rem] flex justify-start items-center border-solid border-b-2 border-gray-400 active:border-b-blue-400'>
                            <div className='w-fit h-full flex justify-center items-center text-xl'><FaUser /></div>
                            <input type="email" className='h-full bg-transparent w-[90%] outline-none p-2 px-5 text-sm' />
                        </div>
                    </div>

                    {/* <a href='' className='text-blue-900 mt-10 mb-10 text-sm'>a</a> */}
                    <button className='p-2 bg-blue-500 lg:w-[80%] w-full rounded-md text-white shadow-sm'>Register</button>
                    <br/>
                    <a href='' className='text-black mt-2 mb-0 text-sm p-2'>Already have an Account? <b className='text-blue-800 underline'>Login</b></a>


                </div>
            </div>
        </div>
    )
}

export default Register