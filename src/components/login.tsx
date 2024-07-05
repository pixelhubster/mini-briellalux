"use client"
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react"

const Login = () => {
  const [details, setDetails] = useState({
    username: "",
    password: ""
  })
  const [error, setError] = useState<String | null>(null)
  const { data } = useSession()
  const handleSubmit = async (e: any) => {
    setError(null)
    e.preventDefault()
    try {
      data && await signOut({ redirect: false})
      const res = await signIn("credentials", {
        username: details.username,
        password: details.password,
        redirect: false
      })
      if (!res?.ok) throw new Error(res?.error as string)
    } catch (err: any) {
      setError(err.message as string)
    }
  }
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setDetails({
      ...details,
      [name]: value
    })
  }
  return (
    <div className="w-[40rem] h-fit bg-gray-00 mt-10 flex flex-col items-center rounded-md overflow-hidden ">
      <div className="h-[10rem] w-full bg-white flex items-center justify-center text-2xl">
        login
      </div>
      {error && <div className="text-red-400">{error}</div>}
      <form onSubmit={handleSubmit} className="w-full flex justify-center">

        <div className="h-full w-[80%] bg-sky-0 flex flex-col md:p-5">
          <label htmlFor="username" className="my-3 text-md">
            Email / Number
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="p-2 px-3 rounded-md outline-none outline-blue-50 outline-2 mb-5"
            placeholder="example@email.com"
            onChange={handleChange}
            required
          />
          <label htmlFor="password" className="my-3 text-md">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="p-2 px-3 rounded-md outline-none outline-blue-50 outline-2 mb-5"
            placeholder="********"
            onChange={handleChange}
            required
          />
          <button className="w-full bg-blue-500/80 p-2 rounded-md my-2 hover:bg-blue-500">
            Login
          </button>
          <a href='' className='text-black text-md p-2'>I do not have an account, <b className='text-blue-800 underline font-normal'>Register</b></a>

        </div>

      </form>
    </div>
  );
};

export default Login;
