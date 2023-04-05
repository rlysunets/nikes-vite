import React from 'react'

import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'

const CartCount = ({ closeCart, onClearCart, cartCount }) => {
   return (
      <div className="bg-white h-11 flex items-center justify-between sticky right-0 top-0 px-3">
         <div className="flex items-center gap-3">
            <div className="cursor-pointer" onClick={closeCart}>
               <ChevronDoubleLeftIcon className="w-5 h-5 hover:scale-[1.2] hover:text-orange-500 transition-all duration-200" />
            </div>
            <div>
               <h3 className="text-base font-medium text-slate-900">
                  Your cart
                  <span className="bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-bold ml-2">({cartCount} Items)</span>
               </h3>
            </div>
         </div>
         <div className="cursor-pointer flex items-center">
            <button type="button" className="rounded bg-theme-cart active:scale-90 p-0.5" onClick={onClearCart}>
               <XMarkIcon className="w-5 h-5 text-white" />
            </button>
         </div>
      </div>
   )
}

export default CartCount