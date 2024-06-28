import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-[4rem] bg-red-200 px-5 flex justify-between items-center">
      logo and name
      <div className="flex bg-green-300 p-2">
        <div>cart</div>
        <div>userlogo</div>
      </div>
    </div>
  )
}

export default Navbar