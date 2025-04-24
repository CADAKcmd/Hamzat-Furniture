import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Layout = () => {
  return (
    <>
     <Navbar />
    <main className='flex flex-col items-center justify-center bg-black'>
      <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default Layout