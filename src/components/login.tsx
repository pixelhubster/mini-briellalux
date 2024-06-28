import React from "react";

const Login = () => {
  return (
    <div className="w-[40rem] h-fit bg-gray-00 mt-20 flex flex-col items-center rounded-md overflow-hidden ">
      <div className="h-[10rem] w-full bg-white flex items-center justify-center text-2xl">
        login
      </div>
      <div className="h-full w-[80%] bg-sky-0 flex flex-col p-5">
        <label htmlFor="username" className="my-3 text-md">
          Email / Number
        </label>
        <input
          type="text"
          id="username"
          className="p-2 px-3 rounded-md outline-none outline-blue-50 outline-2 mb-5"
          placeholder="example@email.com"
        />
        <label htmlFor="password" className="my-3 text-md">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="p-2 px-3 rounded-md outline-none outline-blue-50 outline-2 mb-5"
          placeholder="********"
        />
        <button className="w-full bg-blue-500/80 p-2 rounded-md my-2 hover:bg-blue-500">
          Login
        </button>
        <a href='' className='text-black text-md p-2'>I do not have an account, <b className='text-blue-800 underline font-normal'>Register</b></a>

      </div>
    </div>
  );
};

export default Login;
