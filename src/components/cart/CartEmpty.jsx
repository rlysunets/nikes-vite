import React from 'react'

import emptyBag from "../../assets/emptybag.png"
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

const CartEmpty = ({ closeCart }) => {
   return (
      <div className="flex flex-col items-center justify-center h-screen gap-6">
         <img src={emptyBag} alt="empty cart" className="w-40 lg:w-36 sm:w-28 h-auto" />
         <button type="button" className="button-theme bg-gradient-to-b from-amber-500 shadow-lg shadow-orange-500 to-orange-500 flex items-center gap-3 py-2 px-5 text-sm font-semibold active:scale-110" onClick={closeCart}>
            <ArrowLeftIcon className="w-5 h-5" />
            <span className="">Back To Nike Store</span>
         </button>
      </div>
   )
}

export default CartEmpty