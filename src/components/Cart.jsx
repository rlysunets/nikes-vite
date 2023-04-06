import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, setCloseCart } from '../redux/slices/CartSlice'

import CartCount from './cart/CartCount'
import CartEmpty from './cart/CartEmpty'
import CartItem from './cart/CartItem'

const Cart = () => {
   const { cartState, cartCount, items, totalPrice } = useSelector(state => state.cart)
   const dispatch = useDispatch()
   const ref = useRef()

   const closeCart = () => {
      dispatch(setCloseCart())
   }

   const onClearCart = () => {
      dispatch(clearCart())
   }

   useEffect(() => {
      const handleOnBlurClick = (e) => {
         const path = e.composedPath()

         if (path[0] === ref.current) {
            dispatch(setCloseCart())
         }
      }
      document.body.addEventListener("click", handleOnBlurClick)

      return () => document.body.removeEventListener("click", handleOnBlurClick)
   }, [])

   return (
      <>
         {cartState && (<div className="blur-effect-theme w-full h-full fixed inset-0 z-[300]" ref={ref}>
            <div className={`blur-effect-theme max-w-xl absolute right-0 w-full h-screen`}>
               <CartCount closeCart={closeCart} onClearCart={onClearCart} cartCount={cartCount} />
               {cartCount > 0 ?
                  <div>
                     <div className="overflow-auto h-[80vh] scroll-hidden">
                        {items?.map(item => <CartItem key={item.id} item={item} />)}
                     </div>

                     <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center gap-3">
                        <div className="flex items-center justify-between">
                           <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                           <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">${totalPrice}</h1>
                        </div>
                        <div className="grid items-center gap-2">
                           <p className="text-sm font-medium text-center">Taxes and Shipping Will Calculate At Shipping</p>
                           <button type="button" className="button-theme bg-theme-cart text-white">Check Out</button>
                        </div>
                     </div>
                  </div>
                  : <CartEmpty closeCart={closeCart} />}
            </div>
         </div >)}
      </>
   )
}

export default Cart