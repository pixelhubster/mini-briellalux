"use client"
import React, { useEffect, useState } from 'react'
import SavedCard from './card/savedcard'
import Modal from './card/modal'
import { useAppSelector } from '@/lib/redux/hooks'
import { useRouter } from 'next/navigation'
import { IProduct } from '@/lib/type'

const getProducts = async (id: string[]) => {
    try {
      const products = await fetch(`http://localhost:3000/api/product?id=${id}`, {
        cache: 'no-cache',
      })
      if (!products.ok) throw new Error("Failed to Fetch data")
      return products.json()
    } catch (error) {
      console.log(error)
    }
  }
  
const Saved = ({ fn } : {fn: Function}) => {
    const value = useAppSelector((state) => state.savedReducer.value)
    const [products, setProducts] = useState<IProduct[]>([])
    const router = useRouter()
    useEffect(() => {
        async function get() {
            value.products.length !== 0 ? setProducts(await getProducts(value.products)) : setProducts([])
        }
        get()
        router.refresh()
    },[value])
    return (
        <Modal fn={fn}>
            <div className='bg-red-00 w-[40rem] max-sm:w-full max-sm:m-3 rounded-md overflow-hidden'>
                <div className=' flex justify-center items-center p-2 bg-red-500 border-2 border-solid border-gray-400'>Saved</div>
                <div className='w-full h-full pb-[1rem] bg-green-200 p-4 overflow-auto'>
                    {products && products.map((product, key) => (
                        <SavedCard {...product} key={key} />
                    ))}
                </div>
            </div>
        </Modal>
    )
}

export default Saved