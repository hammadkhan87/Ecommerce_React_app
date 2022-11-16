import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { selectCartitems, selectCartState, selectTotalAmount, selectTotalQty, setClearCartItem, SetcloseCart, setGetTotal } from '../../App/CartSlice'
import Cartcount from './Cart/Cartcount'
import CartEmpty from './Cart/CartEmpty'
import Cartitems from './Cart/Cartitems'

Cartitems
const Cart = () => {
  const dispatch=useDispatch()
  const ifcartstate=useSelector(selectCartState)
  const cartItems = useSelector(selectCartitems)
  const totalAmount = useSelector(selectTotalAmount)
  const totalqty= useSelector(selectTotalQty)
  useEffect(()=>{
    dispatch(setGetTotal())
  },[cartItems,dispatch])
  
  const onCartToggle = () =>{
    dispatch(SetcloseCart(
      {
        cartstate:false
      }
    ))
  }
  const onClearcartitem=()=>{
    dispatch(setClearCartItem())
  }
  return (
    
    <>
    <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme
    w-full h-screen opacity-100 ${ifcartstate ? 'opacity-100 visible translate-x-0':'opacity-0 invisible translate-x-8'} `}>
        <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
            <Cartcount totalqty={totalqty}
            onCartToggle={onCartToggle} onClearcartitem={onClearcartitem}/>
            {cartItems?.length === 0 ? <CartEmpty onCartToggle={onCartToggle} /> : <div>
              <div className='flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-7  '>
              {cartItems?.map((item,i)=>(
                <Cartitems key={i} item={item}/>
              ))}
              </div>
              <div className='fixed bottom-0 bg-white w-full px-5 py-2 grid items-center'>             
                 <div className='flex items-center justify-between'>
                <h1 className='text-base font-semibold uppercase'>SubTotal</h1>
                <h1 className='text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5'>${totalAmount}</h1>
              </div>
              <div className='grid items-center gap-2 '>
                <p className='text-sm font-medium text-center'>Taxes and Shipping will Calculate At Shipping</p>
                <button type='button' className='button-theme bg-theme-cart text-white'>Check Out</button>
              </div>
              </div>

              </div> }
            
            
        </div>
    </div>
    </>
  )
}

export default Cart
