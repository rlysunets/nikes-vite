import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const setLocalStorage = (state) => localStorage.setItem("cart", JSON.stringify(state))
const getTotalCount = (arr => arr.reduce((sum, item) => item.count + sum, 0))
const getTotalPrice = (arr => arr.reduce((sum, item) => item.count * item.price + sum, 0))

const initialState = {
   cartState: false,
   cartCount: localStorage.getItem("cart") ? getTotalCount(JSON.parse(localStorage.getItem("cart"))) : 0,
   items: JSON.parse(localStorage.getItem("cart")) || [],
   totalPrice: localStorage.getItem("cart") ? getTotalPrice(JSON.parse(localStorage.getItem("cart"))) : 0,
}

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      setOpenCart: (state) => {
         document.body.style.overflow = "hidden"
         state.cartState = true
      },
      setCloseCart: (state) => {
         document.body.style.overflow = "scroll"
         state.cartState = false
      },
      addItem: (state, action) => {
         const findItem = state.items.find(el => el.id === action.payload.id)

         if (!findItem) {
            state.items.push({
               ...action.payload,
               count: 1
            })
            toast.success(`${action.payload.title} added to cart.`)
         } else {
            findItem.count++
            toast.success(`Item quantity increased.`, { duration: 2000 })
         }
         state.cartCount = getTotalCount(state.items)
         state.totalPrice = getTotalPrice(state.items)
         setLocalStorage(state.items)
      },
      removeItem: (state, action) => {
         state.items = state.items.filter(el => el.id !== action.payload.id)
         toast.success(`"${action.payload.title}" removed from cart.`, { duration: 2000 })
         state.cartCount = getTotalCount(state.items)
         state.totalPrice = getTotalPrice(state.items)
         setLocalStorage(state.items)
      },
      plusItem: (state, action) => {
         state.items.map(el => {
            if (el.id === action.payload) {
               el.count++
               toast.success(`One more "${el.title}" added.`, { duration: 2000 })
               state.cartCount = getTotalCount(state.items)
               state.totalPrice = getTotalPrice(state.items)
               setLocalStorage(state.items)
            }
         })
      },
      minusItem: (state, action) => {
         state.items.map(el => {
            if (el.id === action.payload && el.count > 1) {
               el.count--
               toast.success(`"${el.title}" reduced by 1.`, { duration: 2000 })
               state.cartCount = getTotalCount(state.items)
               state.totalPrice = getTotalPrice(state.items)
               setLocalStorage(state.items)
            }
         })
      },
      clearCart: (state) => {
         state.items = []
         toast.success(`Cart cleared`, { duration: 2000 })
         state.cartCount = 0
         state.totalPrice = 0
         setLocalStorage(state.items)
      }
   },
})

export const { setOpenCart, setCloseCart, addItem, removeItem, plusItem, minusItem, clearCart } = cartSlice.actions

export default cartSlice.reducer