// import ChooseColorCard from '@/components/cards/chooseColorCard'
// import ChooseRoundCard from '@/components/cards/chooseRoundCard'
// import SizeCard from '@/components/cards/sizeCard'
// import Footer from '@/components/footer'
// import FrequentlySearched from '@/components/frequentlysearched'
import Navbar from '@/components/navbar'
// import Similarproduct from '@/components/similarproducts'
import React from 'react'
import { FaStar } from 'react-icons/fa6'

const getProducts = async (id: string) => {
  try {
    const product = await fetch(`http://localhost:3000/api/product?id=${id}`, {
      cache: 'no-cache',
    })
    if (!product.ok) throw new Error("Failed to Fetch data");
    return product.json()
  } catch (error) {
    console.log(error)
  }
}

const page = async ({ params }: { params: { prodid: string } }) => {
  const product = await getProducts(params.prodid)
  const { name, price, category, description, images, shipping,quantity } = product
  return (
    <div className='w-full h-[90rem] bg-white'>
      <Navbar />
      <div className='w-full bg-white flex justify-evenly items-center lg:px-[10rem] px-[3rem] max-sm:px-0 flex-col pb-10 mt-5'>
        {/* slider */}
        <div className='w-full h-[70vh] min-h-[70vh] bg-slate-200 flex justify-center items-center rounded-md overflow-hidden '>
          <div className='h-[100%] w-[5rem] bg-slate-00 flex flex-col justify-evenly items-center'>
            <div className='bg-slate-300 h-[5rem] w-[90%] cursor-pointer hover:border-solid hover:border-slate-400 hover:border-2'></div>
            <div className='bg-slate-300 h-[5rem] w-[90%] cursor-pointer hover:border-solid hover:border-slate-400 hover:border-2'></div>
            <div className='bg-slate-300 h-[5rem] w-[90%] cursor-pointer hover:border-solid hover:border-slate-400 hover:border-2'></div>
            <div className='bg-slate-300 h-[5rem] w-[90%] cursor-pointer hover:border-solid hover:border-slate-400 hover:border-2'></div>
            <div className='bg-slate-300 h-[5rem] w-[90%] cursor-pointer hover:border-solid hover:border-slate-400 hover:border-2'></div>
            <div className='bg-slate-300 h-[5rem] w-[90%] cursor-pointer hover:border-solid hover:border-slate-400 hover:border-2'></div>
          </div>
          <div className='h-full w-full bg-slate-300 flex justify-center items-center'>image</div>
        </div>
        {/* eof slider */}
        <div className='w-full min-h-[70vh] bg-slate-00 flex flex-col mt-5 max-sm:px-5'>

          <div className='w-full bg-yellow-00'>
            <h3 className='font-semibold text-2xl'>{name}</h3>
            <p className='text-sm'>{category}</p>
          </div>

          <div className='w-full h-full bg-white flex flex-col'>

            <div className='w-full h-full bg-red-00 pt-0'>

              <div className='w-full bg-yellow-00 py-2 mt-5'>
                <h3 className='font-semibold text-xl'>Price</h3>
                <div className='text-3xl flex justify-start items-center font-semibold'>
                  {price}
                  <p className='text-sm'>Ghc</p>
                </div>
                <h3 className='text-md'>{quantity} items in stock</h3>
              </div>

              <div className='w-full bg-yellow-00 py-2 mt-5 flex'>
                <button className='w-fit mr-2 px-5 h-[3rem] bg-slate-300/100 backdrop-blur-0 hover:backdrop-blur-none hover:bg-blue-500/40 shaodw-md shadow-orange-200 flex justify-center items-center rounded-md font-semibold text-white '>Save</button>
                <button className='w-fit mr-2 px-5 h-[3rem] bg-slate-300/100 backdrop-blur-0 hover:backdrop-blur-none hover:bg-blue-500/40 shaodw-md shadow-orange-200 flex justify-center items-center rounded-md font-semibold text-white '>Cart</button>
                <button className='w-fit mr-2 px-5 h-[3rem] bg-blue-400 flex justify-center items-center rounded-md font-semibold text-white grid-cols-subgrid col-span-3'>Order Now</button>
              </div>



            </div>


            <div className='w-full h-full bg-yellow-00'>
              <div className='w-full bg-yellow-00 py-2 mt-5'>
                <h3 className='font-semibold text-xl'>Product Description</h3>
                <p className='text-sm pt-5'>{description}</p>
              </div>
              <div className='w-full bg-yellow-00 py-2 mt-5'>
                <h3 className='font-semibold text-xl'>Shipping Details</h3>
                <p className='text-sm pt-5'>{shipping}</p>
              </div>

            </div>


          </div>
        </div>
      </div>

      <div>
      </div>

      {/* <Footer /> */}



    </div >
  )
}

export default page