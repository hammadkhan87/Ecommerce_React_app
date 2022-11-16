import React from 'react'
import Hero from './component/Hero'
import { heroapi ,popularsales,toprateslaes,highlight,sneaker,story,footerAPI } from './data/data'
import Sales from './component/Sales'
import Flexcontaint from './component/Flexcontaint'
import Stories from './component/Stories'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Cart from './component/Cart'

const App = () => {
  return (
    <div>
      
      <Navbar/>
      <Cart/>
    <main className='flex flex-col gap-16 relative'>
    
      <Hero heroapi={heroapi}></Hero>
      <Sales endpoint={popularsales} ifExists></Sales>
      <Flexcontaint endpoint={highlight} ifExists/>
      <Sales endpoint={toprateslaes}></Sales>
      <Flexcontaint endpoint={sneaker}/>
      <Stories story={story}/>
      
      
    </main>
    <Footer footerAPI={footerAPI}/>
    </div>
  )
}

export default App
