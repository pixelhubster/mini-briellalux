"use client"
import ProductCard from "@/components/card/product";
import Navbar from "@/components/navbar";
import React from "react";


function page() {
  return (
    <>
      <Navbar />
      {/* hero section */}
      <section className="bg-yellow-200 h-[30rem] w-full">

      </section>

      {/* product listing */}
      <section className="w-full bg-green-50">
        <div className="md:p-5 p-2 max-md:w-full">


          <div className=" bg-white w-fit rounded-md p-0 flex justify-evenly items-center">
            <input type="search" name="product" id="productname" className="p-2 px-4 rounded-md w-[25rem] max-md:w-full outline-none" placeholder="Search..." />
            <button className="h-full px-5 bg-blue-300 rounded-md">search</button>
          </div>


        </div>
        <div className="w-full h-full bg-slate-300 p-5 md:px-10 customgrid">
          <ProductCard name="Noble" price="200" isDiscounted={false} image="" />
          <ProductCard name="Noble" price="200" isDiscounted={false} image="" />
          <ProductCard name="Noble" price="200" isDiscounted={false} image="" />
          <ProductCard name="Noble" price="200" isDiscounted={false} image="" />
          <ProductCard name="Noble" price="200" isDiscounted={false} image="" />
          <ProductCard name="Noble" price="200" isDiscounted={false} image="" />
          <ProductCard name="Noble" price="200" isDiscounted={false} image="" />
          <ProductCard name="Noble" price="200" isDiscounted={false} image="" />
          <ProductCard name="Noble" price="200" isDiscounted={false} image="" />
          <ProductCard name="Noble" price="200" isDiscounted={false} image="" />
          <ProductCard name="Noble" price="200" isDiscounted={false} image="" />
          <ProductCard name="Noble" price="200" isDiscounted={false} image="" />
          <ProductCard name="Noble" price="200" isDiscounted={false} image="" />
          <ProductCard name="Noble" price="200" isDiscounted={false} image="" />
          <ProductCard name="Noble" price="200" isDiscounted={false} image="" />
        </div>
      </section>
    </>


  )
}

export default page;