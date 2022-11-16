import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import emptybag from "../../assets/emptybag.png"
import React from 'react'

const CartEmpty = ({onCartToggle}) => {
  return (
    <>
     <div className='flex items-center justify-center flex-col text-center px-11 gap-7 h-screen'>
        <img src={emptybag} alt="bg-cart" className='w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110' />
    
     <button type='button' className=' bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center 
     text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110 rounded-xl'
     onClick={onCartToggle}>
        <ArrowLeftIcon className='w-5 h-5'/>
        <span className=''>Back to Nike Store</span>
     </button>
     </div>
    </>
  )
}

export default CartEmpty
