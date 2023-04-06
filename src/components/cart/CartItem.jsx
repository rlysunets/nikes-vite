import React from 'react'
import { useDispatch } from 'react-redux'

import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline"
import { minusItem, plusItem, removeItem } from '../../redux/slices/CartSlice'

const CartItem = ({ item }) => {
   const { id, title, text, img, price, color, shadow, count } = item
   const dispatch = useDispatch()

   const onRemoveItem = () => {
      dispatch(removeItem(item))
   }

   const onPlusItem = () => {
      dispatch(plusItem(id))
   }

   const onMinusItem = () => {
      dispatch(minusItem(id))
   }

   return (
      <div className="flex items-center justify-between px-5 my-4">
         <div className="flex gap-5">
            <div className={`relative bg-gradient-to-b ${color} ${shadow} rounded p-3 hover:scale-105 transition-all duration-100 ease-in-out grid items-center w-44 h-auto lg:w-40 sm:w-32 xsm:w-24`}>
               <img src={img} alt={title} className="" />
               <div className='absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded'>${price}</div>
            </div>
            <div className="flex flex-col justify-center gap-2 py-1">
               <div>
                  <h3 className="font-medium text-lg lg:text-sm">{title}</h3>
                  <p className="text-sm lg:text-xsm">{text}</p>
               </div>
               <div className="flex items-center justify-around w-40">
                  <button type="button" className="rounded bg-theme-cart active:scale-90 p-0.5 w-6 h-6" onClick={onMinusItem}>
                     <MinusIcon className="w-5 h-5 text-white" />
                  </button>
                  <div className="bg-theme-cart rounded text-white font-medium w-7 h-6 flex items-center justify-center">{count}</div>
                  <button type="button" className="rounded bg-theme-cart active:scale-90 p-0.5" onClick={onPlusItem}>
                     <PlusIcon className="w-5 h-5 text-white" />
                  </button>
               </div>
            </div>
         </div>

         <div className="flex flex-col items-center gap-3">
            <div className="text-lg lg:text-base text-slate-900 font-medium">${price * count}</div>

            <button type="button" className="rounded bg-theme-cart active:scale-90 p-0.5" onClick={onRemoveItem}>
               <TrashIcon className="w-5 h-5 text-white" />
            </button>
         </div>
      </div>
   )
}

export default CartItem