import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setOpenCart } from '../redux/slices/CartSlice'

import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png';

const Header = () => {
   const [navState, setNavState] = useState(false)
   const dispatch = useDispatch()
   const count = useSelector(state => state.cart.cartCount)

   const openCart = () => {
      dispatch(setOpenCart())
   }

   const onNavMove = () => {
      if (window.scrollY > 60) {
         setNavState(true)
      } else {
         setNavState(false)
      }
   }

   useEffect(() => {
      window.addEventListener("scroll", onNavMove)

      return () => {
         window.removeEventListener("scroll", onNavMove)
      }
   }, [])

   return (
      <header className={`${navState ? "blur-effect-theme" : ""} fixed top-0 left-0 right-0 z-[250] grid items-center h-16`}>
         <nav className="flex justify-between gap-2 nike-container">
            <div className="w-16 h-auto flex items-center">
               <img src={logo} alt="logo" className={`${navState && "brightness-0"}`} />
            </div>
            <ul className="flex gap-2">
               <li className="cursor-pointer">
                  <MagnifyingGlassIcon className={`icon-style ${navState && "brightness-0"}`} />
               </li>
               <li className="cursor-pointer">
                  <HeartIcon className={`icon-style ${navState && "brightness-0"}`} />
               </li>
               <li className="cursor-pointer relative">
                  <button type='button' className="active:scale-110" onClick={openCart}>
                     <ShoppingBagIcon className={`icon-style ${navState && " brightness-0"}`} />
                  </button>
                  <div className={`${navState ? "bg-black text-slate-200" : "bg-white text-slate-900"} absolute top-3.5 left-3 w-5 h-5 leading-tight rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-200`}>{count}</div>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Header