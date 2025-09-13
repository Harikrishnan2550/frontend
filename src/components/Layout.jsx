import React from 'react'
import Footer from './Footer'
import Routers from '../routes/Router'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className='overflow-x-hidden'>
 <Navbar/>
 <Routers/>
 <Footer/>      
    </div>
  )
}

export default Layout
