import React from 'react'
import Modal from '../card/modal'

const PaymentInstructionBoard = ({ fn }: { fn: Function }) => {
    return (
        // <div className='w-full h-full flex justify-center z-[3] fixed top-0 left-0 p-5' 
        // onClick={(e) => e.target === e.currentTarget && fn()}>
        <Modal fn={fn}>

            <div className='md:w-[50rem] w-full m-5 h-[40rem] p-10 bg-slate-200 mt-10 rounded-md shadow-md flex flex-col items-center'>
                <h3 className='font-bold text-2xl font-serif'>PAYMENT INSTRUCTION</h3>
                <div className='w-full h-fit p-5 bg-gray-200 border-gray-300 border-solid border-2 rounded-md mt-10'>
                    <ol>
                        <li>Dial <b> *170#</b></li>
                        <li>Select <b>"Payments"</b></li>
                        <li>Select <b> "Next"</b> </li>
                        <li>Select <b> "Goods and Services"  </b></li>
                        <li>Enter <b>The name</b> as the mechant code</li>
                        <li>Enter payment reference <b>34dj93</b></li>
                        <li>Enter the amount <b>4000</b></li>
                        <li>Enter <b>PIN</b></li>
                    </ol>
                </div>
                <div className='flex gap-5  max-md:gap-1 mt-10'>
                    <input type="tel" name="ref0" id="ref0" className='max-w-[5rem] max-sm:scale-90 h-[4rem] rounded-2xl outline-none font-mono flex justify-center items-center text-[2rem] text-center focus:outline-2 focus:outline-blue-500' readOnly maxLength={1} value={0} />
                    <input type="tel" name="ref1" id="ref1" className='max-w-[5rem] max-sm:scale-90 h-[4rem] rounded-2xl outline-none font-mono flex justify-center items-center text-[2rem] text-center focus:outline-2 focus:outline-blue-500' readOnly maxLength={1} value={0} />
                    <input type="tel" name="ref2" id="ref2" className='max-w-[5rem] max-sm:scale-90 h-[4rem] rounded-2xl outline-none font-mono flex justify-center items-center text-[2rem] text-center focus:outline-2 focus:outline-blue-500' readOnly maxLength={1} value={0} />
                    <input type="tel" name="ref3" id="ref3" className='max-w-[5rem] max-sm:scale-90 h-[4rem] rounded-2xl outline-none font-mono flex justify-center items-center text-[2rem] text-center focus:outline-2 focus:outline-blue-500' readOnly maxLength={1} value={0} />
                    <input type="tel" name="ref4" id="ref4" className='max-w-[5rem] max-sm:scale-90 h-[4rem] rounded-2xl outline-none font-mono flex justify-center items-center text-[2rem] text-center focus:outline-2 focus:outline-blue-500' readOnly maxLength={1} value={0} />
                    <input type="tel" name="ref5" id="ref5" className='max-w-[5rem] max-sm:scale-90 h-[4rem] rounded-2xl outline-none font-mono flex justify-center items-center text-[2rem] text-center focus:outline-2 focus:outline-blue-500' readOnly maxLength={1} value={0} />
                </div>
                <button className=' p-2 bg-green-400 px-[4rem] m-5 rounded-md'>I have completed payment</button>
            </div>
        </Modal>
    )
}

export default PaymentInstructionBoard