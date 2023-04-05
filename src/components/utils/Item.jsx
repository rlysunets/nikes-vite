import React from 'react'
import { useDispatch } from 'react-redux'

import { StarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'

import { addItem, setOpenCart } from '../../redux/slices/CartSlice'

const Item = ({ isColumn, item }) => {
   const { id, title, text, rating, btn, img, price, color, shadow } = item
   const dispatch = useDispatch()

   const onAddToCart = () => {
      dispatch(addItem(item))
   }

   const onByNow = () => {
      dispatch(addItem(item))
      dispatch(setOpenCart())
   }

   return (
      <div className={`${isColumn ? "flex-col" : "justify-between"} bg-gradient-to-t ${color} ${shadow} flex items-center gap-4 rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 mb-8 h-full`}>
         <div className={`${isColumn ? "justify-items-center" : ""} grid items-center`}>
            <h2 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium drop-shadow">{title}</h2>
            <p className="text-slate-200 text-base md:text-sm font-normal drop-shadow">{text}</p>
            <div className="flex items-center justify-between w-28 my-2">
               <h3 className="flex items-center font-medium bg-white/80 px-2 rounded text-black text-sm blur-effect-theme">${price}</h3>
               <div className="flex items-center gap-1">
                  <StarIcon className="h-6 w-6 md:h-4 md:w-4 icon-style active:scale-110 leading-tight" />
                  <h3 className="font-normal text-slate-100">{rating}</h3>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <button onClick={onAddToCart} type="button" className="blur-effect-theme button-theme bg-slate-100/80 p-1 shadow shadow-sky-100 rounded active:scale-110 leading-tight">
                  <ShoppingBagIcon className="h-5 w-5 icon-style text-slate-900 " />
               </button>
               <button type="button" className="blur-effect-theme button-theme bg-slate-100/80 shadow shadow-sky-100 rounded px-2 py-1 
               text-sm font-medium active:scale-110 leading-tight" onClick={onByNow}>{btn}</button>
            </div>
         </div>

         <div>
            <img src={img} alt={title} className="h-36 w-56 transitions-theme hover:-rotate-12" />
         </div>
      </div>
   )
}

export default Item