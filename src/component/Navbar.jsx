import React from 'react'
import {HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon, ShoppingCartIcon} from '@heroicons/react/24/solid'
import logo from "../assets/logo.png"
import {useDispatch,useSelector} from 'react-redux'
import { useState } from 'react'
import { filter, findLastKey } from 'lodash'
import { useEffect } from 'react'
import { SetopenCart,selectTotalQty } from '../../App/CartSlice'


const Navbar = () => {
  const dispatch=useDispatch()
  const totalqty= useSelector(selectTotalQty)
  const onCartToggle =()=>{
    dispatch(SetopenCart(
      {
        cartstate:true
      }
    ))
  }
  const [navstate,setnavstate]=useState(false)
  const OnnavScroll=()=>{
    if(window.scrollY > 30){
      setnavstate(true)
    }else{setnavstate(false)}
  }
  useEffect(()=>{
   window.addEventListener('scroll',OnnavScroll)
   return ()=>{
    removeEventListener("scroll",OnnavScroll)
   }
  },[])
  return (
    <>
     <header className={!navstate?`absolute top-7 left-0 right-0 opacity-100 z-50`:'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-200 blur-effect-theme'}>
        <nav className='flex items-center justify-between nike-container '>
            <div className='flex items-center'><img src={logo} alt="lago/img" className={`w-16 h-auto ${navstate && "filter brightness-0"}`}/></div>
        <ul className='flex items-center justify-center gap-2'>
          <li className='grid items-center'>
            <MagnifyingGlassIcon className={`icon-style ${navstate && "text-slate-900 transition-all duration-300"}` }/> 
            </li>
            <li className='grid items-center'>
                <HeartIcon className='icon-style'/>
            </li>
            <li className='grid items-center border-none outline-none active:scale-110 transition-all duraton-300 relative'>
              <button type='button' onClick={onCartToggle}> <ShoppingBagIcon className='icon-style'/>
              <div className={`absolute top-4 right-0 bg-white text-slate-900 shadow shadow-slate-900 w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300`}>{totalqty}</div></button>
            </li>
            </ul></nav>
     </header>
    </>
  )
}

export default Navbar
