import React from 'react'
import CartCard from './card/cartcard'
import Modal from './card/modal'

const Cart = () => {
    return (
        <Modal>
            <div className='bg-red-00 w-[40rem] h-[40rem] max-sm:w-full max-sm:m-3 rounded-md overflow-hidden'>
                <div className=' flex justify-center items-center p-2 bg-red-500 border-2 border-solid border-gray-400'>header</div>
                <div className='w-full h-full pb-[5rem] bg-green-200 p-4 overflow-auto'>
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />

                    <button className="w-full bg-blue-500/80 p-2 rounded-sm my-2 hover:bg-blue-500">
                        Checkout
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default Cart