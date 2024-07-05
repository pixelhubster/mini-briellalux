"use client"
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useState } from 'react'
import { FaUser } from 'react-icons/fa6'

const Register = () => {
    const url = "https://zouk.co.in/cdn/shop/products/QutubStripes_f8e2b9fe-30a2-4f75-ac39-6bd4dbda46f4.jpg?v=1679041662&width=700"
    const [details, setDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        number: "",
        cpassword: "",
        password: "",
    })
    const router = useRouter()
    const [error, setError] = useState<String | null>(null)
    const areDetailsEmpty = () => {
        return Object.values(details).every(value => value !== "")
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setDetails({
            ...details,
            [name]: value,
        })
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            setError(null)
            if (!areDetailsEmpty()) throw new Error("Fields cannot be empty")
            if (details.cpassword !== details.password) throw new Error("Password does not match")
            const response = await fetch("http://localhost:3000/api/createuser", {
                method: "POST",
                body: JSON.stringify(details),
            })
            const result = await response.json()
            if (result?.error) throw new Error(result.error)
            if (response.ok && result?.message) router.push("/")
        } catch (err: any) {
            console.log(err.message)
            setError(err.message)
        }
    }
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
                    <form onSubmit={handleSubmit}>
                        <div className='text-red-700'>{error}</div>
                        <div className='w-full flex flex-col justify-center mb-5'>
                            <label htmlFor="firstname" className='text-md text-slate-600 p-1 py-2'>Firstname</label>
                            <div className='lg:w-[80%] w-full h-[2rem] flex justify-start items-center border-solid border-b-2 border-gray-400 active:border-b-blue-400'>
                                <div className='w-fit h-full flex justify-center items-center text-xl'><FaUser /></div>
                                <input name='firstname' onChange={handleChange} type="text" className='h-full bg-transparent w-[90%] outline-none p-2 px-5 text-sm' />
                            </div>
                        </div>

                        <div className='w-full flex flex-col justify-center mb-5'>
                            <label htmlFor="lastname" className='text-md text-slate-600 p-1 py-2'>Last Name</label>
                            <div className='lg:w-[80%] w-full h-[2rem] flex justify-start items-center border-solid border-b-2 border-gray-400 active:border-b-blue-400'>
                                <div className='w-fit h-full flex justify-center items-center text-xl'><FaUser /></div>
                                <input name="lastname" onChange={handleChange} type="text" className='h-full bg-transparent w-[90%] outline-none p-2 px-5 text-sm' required />
                            </div>
                        </div>

                        <div className='w-full flex flex-col justify-center mb-5'>
                            <label htmlFor="email" className='text-md text-slate-600 p-1 py-2'>Email Address</label>
                            <div className='lg:w-[80%] w-full h-[2rem] flex justify-start items-center border-solid border-b-2 border-gray-400 active:border-b-blue-400'>
                                <div className='w-fit h-full flex justify-center items-center text-xl'><FaUser /></div>
                                <input name="email" onChange={handleChange} type="email" className='h-full bg-transparent w-[90%] outline-none p-2 px-5 text-sm' required />
                            </div>
                        </div>

                        <div className='w-full flex flex-col justify-center mb-5'>
                            <label htmlFor="number" className='text-md text-slate-600 p-1 py-2'>Phone Number</label>
                            <div className='lg:w-[80%] w-full h-[2rem] flex justify-start items-center border-solid border-b-2 border-gray-400 active:border-b-blue-400'>
                                <div className='w-fit h-full flex justify-center items-center text-xl'><FaUser /></div>
                                <input name="number" onChange={handleChange} type="tel" className='h-full bg-transparent w-[90%] outline-none p-2 px-5 text-sm' required />
                            </div>
                        </div>

                        <div className='w-full flex flex-col justify-center mb-5'>
                            <label htmlFor="password" className='text-md text-slate-600 p-1 py-2'>Choose a Password</label>
                            <div className='lg:w-[80%] w-full h-[2rem] flex justify-start items-center border-solid border-b-2 border-gray-400 active:border-b-blue-400'>
                                <div className='w-fit h-full flex justify-center items-center text-xl'><FaUser /></div>
                                <input name="password" onChange={handleChange} type="text" className='h-full bg-transparent w-[90%] outline-none p-2 px-5 text-sm' required />
                            </div>
                        </div>

                        <div className='w-full flex flex-col justify-center mb-10'>
                            <label htmlFor="cpassword" className='text-md text-slate-600 p-1 py-2'>Confirm Password</label>
                            <div className='lg:w-[80%] w-full h-[2rem] flex justify-start items-center border-solid border-b-2 border-gray-400 active:border-b-blue-400'>
                                <div className='w-fit h-full flex justify-center items-center text-xl'><FaUser /></div>
                                <input name="cpassword" onChange={handleChange} type="text" className='h-full bg-transparent w-[90%] outline-none p-2 px-5 text-sm' required />
                            </div>
                        </div>

                        {/* <a href='' className='text-blue-900 mt-10 mb-10 text-sm'>a</a> */}
                        <button type='submit' className='p-2 bg-blue-500 lg:w-[80%] w-full rounded-md text-white shadow-sm'>Register</button>
                        <br />
                        <a href='' className='text-black mt-2 mb-0 text-sm p-2'>Already have an Account? <b className='text-blue-800 underline'>Login</b></a>

                    </form>


                </div>
            </div>
        </div>
    )
}

export default Register