"use client"
import React, { useState } from "react";
import { CiHeart } from 'react-icons/ci'
import { FaHeartCircleCheck } from "react-icons/fa6";
import { BsCartPlus, BsCartCheckFill } from "react-icons/bs";
import { addItem, removeItem } from "@/lib/redux/features/saved-slice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { addToCart, removeFromCart } from "@/lib/redux/features/cart-slice";

interface ProdDet {
    name: string;
    price: string;
    _id: string,
    category: string,
    quantity: number,
    discount?: number;
    isDiscounted: boolean;
    images: string[];
}
const ProductCard: React.FC<ProdDet> = ({ name, price, discount, isDiscounted, images, _id, category, quantity }) => {
    const cart = useAppSelector(state => state.cartReducer)
    const saved = useAppSelector(state => state.savedReducer)
    const isInCart = cart.value.products.find(id => id._id === _id)
    const isInSave = saved.value.products.find(id => id === _id)
    const isInCartFn = () => typeof isInCart !== "undefined";
    const isInSaveFn = () => typeof isInSave !== "undefined";
    const dispatch = useAppDispatch();
    const clickSave = () => {
        if (isInSaveFn()) {
            dispatch(removeItem(_id))
        } else {
            dispatch(addItem(_id))
        }
    }
    const ClickCart = () => {
        if (isInCartFn()) {
            dispatch(removeFromCart(_id))
        } else {
            dispatch(addToCart({_id, qty: 0}))
        }
    }
    return (
        <div className="m-1 md:h-[20rem] h-[20rem] bg-white shrink-0 border-solid border-2 border-blue-300 hover:border-blue-600 rounded-md overflow-hidden shadow-md hover:shadow-lg group/sl cursor-pointer">
            {isDiscounted && (
                <div className="p-1 px-2 pl-3 bg-blue-400 absolute top-10 rounded-r-md text-sm whitespace-nowrap cursor-default z-[1]">{discount}% off</div>
            )}
            <img src={images[0]} alt="" className="w-full h-[60%] bg-green-000 group-hover/sl:scale-[105%] transition-all duration-[200ms]" />
            <div className="w-full h-[40%] bg-yellow-000 flex flex-col justify-between p-4">
                <div className="uppercase tracking-wide flex justify-between text-[12px] font-semibold text-indigo-400">
                    <p>{category}</p>
                    <button className="h-full px-2 text-lg flex items-center justify-center font-bold" onClick={clickSave}>
                        {isInSaveFn() ? <FaHeartCircleCheck /> : <CiHeart /> }
                    </button>
                </div>
                <a className="mt-1 block md:leading-tight font-medium text-black leading-4 md:text-base text-md hover:underline md:min-h-[2.5rem] min-h-[2rem]" href={`/product/${_id}`}>{name}</a>
                <div className="w-full py-2 flex items-center justify-between">
                    <p className="font-semibold pr-2">
                        Ghc{price}
                        {quantity > 0 && (
                        <span className="text-green-400 ml-1 text-sm font-normal tracking-normal">in stock</span>
                        )}
                    </p>
                    
                    <button className="text-xl text-blue-700" onClick={ClickCart} >
                        {isInCartFn() ? <BsCartCheckFill /> : <BsCartPlus />}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;