import Profile from "@/components/boards/profile";
import ProductCard from "@/components/card/product";
import Navbar from "@/components/navbar";
import React from "react";

const getProducts = async () => {
  try {
    const products = await fetch("http://localhost:3000/api/product", {
      cache: 'no-cache',
    })
    if (!products.ok) throw new Error("Failed to Fetch data")
    return products.json()
  } catch (error) {
    console.log(error)
  }
}

async function page() {
  const products = await getProducts()
  return (
    <>
      <Navbar />
      {/* hero section */}
      <section className="bg-yellow-200 h-[30rem] w-full">

      </section>

      {/* product listing */}
      <section className="w-full bg-green-50 lg:px-[10rem] px-[2rem] max-sm:px-0 mb-[5rem]">
        <div className="md:p-5 p-2 max-md:w-full flex justify-between items-center">
          <h2> All products</h2>
          <div className=" bg-white w-fit rounded-md p-0 flex justify-evenly items-center">
            <input type="search" name="product" id="productname" className="p-2 px-4 rounded-md w-[25rem] max-md:w-full outline-none" placeholder="Search..." />
            <button className="h-full px-5 bg-blue-300 rounded-md">search</button>
          </div>


        </div>
        <div className="w-full h-full bg-slate-300 customgrid">
          {products && products.map((product: any, key:number) => (
            <ProductCard {...product} isDiscounted={false} key={key}/>
          )
          )}

        </div>
      </section>
    </>


  )
}

export default page;