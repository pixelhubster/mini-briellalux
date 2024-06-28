import React, { useState } from "react";
import { CiHeart, CiShoppingCart } from 'react-icons/ci'
import { FaHeartCircleCheck } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { BsCartPlus, BsCartCheckFill } from "react-icons/bs";
interface ProdDet {
    name: string;
    price: string;
    discount?: number;
    isDiscounted: boolean;
    image: string;
}
const ProductCard: React.FC<ProdDet> = ({ name, price, discount, isDiscounted, image }) => {
    const [isSaved, setIsSaved] = useState(false);
    const [inCart, setInCart] = useState(false);
    return (
        // <div className="min-w-[10rem] max-w-[14rem] m-1 md:h-[18rem] h-[18rem] bg-white shrink-0 border-solid border-2 border-blue-300 hover:border-blue-600 rounded-md overflow-hidden shadow-md hover:shadow-lg group/sl cursor-pointer">
        <div className="m-1 md:h-[20rem] h-[20rem] bg-white shrink-0 border-solid border-2 border-blue-300 hover:border-blue-600 rounded-md overflow-hidden shadow-md hover:shadow-lg group/sl cursor-pointer">
            {isDiscounted && (
                <div className="p-1 px-2 pl-3 bg-blue-400 absolute top-10 rounded-r-md text-sm whitespace-nowrap cursor-default z-[1]">{discount}% off</div>
            )}
            <img src={image} alt="" className="w-full h-[60%] bg-green-000 group-hover/sl:scale-[105%] transition-all duration-[200ms]" />
            <div className="w-full h-[40%] bg-yellow-000 flex flex-col justify-between p-4">
                <div className="uppercase tracking-wide flex justify-between text-[12px] font-semibold text-indigo-400">
                    <p>category</p>
                    <button className="h-full px-2 text-lg flex items-center justify-center font-bold" onClick={() => setIsSaved(!isSaved)}>
                        {isSaved ? <FaHeartCircleCheck /> : <CiHeart /> }
                    </button>
                </div>
                <a className="mt-1 block md:leading-tight font-medium text-black leading-4 md:text-base text-md hover:underline md:min-h-[2.5rem] min-h-[2rem]" href="">{name}</a>
                {/* <div className="w-full flex items-center justify-center">{name}</div> */}
                <div className="w-full py-2 flex items-center justify-between">
                    <p className="font-semibold pr-2">
                        Ghc{price}
                        <span className="text-green-400 ml-1 text-sm font-normal tracking-normal">in stock</span>
                    </p>
                    
                    <button className="text-xl text-blue-700" onClick={() => setInCart(!inCart)}>
                        {/* <CiShoppingCart /> */}
                        {/* <FaShoppingCart /> */}
                        { inCart ? <BsCartCheckFill /> : <BsCartPlus />}
                    </button>
                    {/* <button className="p-2 bg-blue-300 rounded-sm text-white font-bold">Buy me Ghc200</button> */}
                </div>
            </div>
        </div>
    )
}
export default ProductCard;