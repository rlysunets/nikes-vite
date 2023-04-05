import { useSelector } from 'react-redux'

import Cart from './components/Cart'
import FlexContent from './components/FlexContent'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Sales from './components/Sales'
import Stories from './components/Stories'

import './App.css'
import { heroAPI, popularSales, topRateSales, highlight, sneaker, stories, footerAPI } from "./data/data"

function App() {
  const cart = useSelector(state => state.cart.cartState)

  return (
    <>
      <Header />
      {cart && <Cart />}
      <main className="flex flex-col gap-10">
        <Hero heroAPI={heroAPI} />
        <Sales data={popularSales} isColumn />
        <FlexContent data={highlight} isReverse />
        <Sales data={topRateSales} />
        <FlexContent data={sneaker} />
        <Stories news={stories.news} title={stories.title} />
      </main>
      <Footer data={footerAPI} />
    </>
  )
}

export default App
