import Checkout from '@/components/checkout'


const page = () => {
    return (
        <>
            <div className='w-full h-full flex justify-center items-center bg-slate-50'>
                <div className='md:w-[50rem] w-full bg-white m-5 mt-10 p-2 flex flex-col items-center rounded-md shadow-md'>
                    <div className='bg-slate-100 h-[5rem] p-2 min-w-[10rem] mt-5 flex justify-center items-center'>image</div>
                    <h6 className='text-xl font-semibold p-5'>Checkout</h6>
                    <div className='w-full px-10 max-sm:px-2 relative'>
                        <Checkout />
                    </div>
                </div>

            </div>
            <div className='w-full h-[100vh] fixed bg-white/30 backdrop-blur-[1px] flex justify-center items-center z-[10]'>
                {/* <div className='bg-white h-[4rem] w-[6rem]'>hhhhhhhhhhhha</div> */}
            </div>

        </>


    )
}

export default page