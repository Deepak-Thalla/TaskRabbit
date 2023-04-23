import React from 'react'
import Navbar from './navigationbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import DisplayCards from './displaycards/DisplayCards'

function RootLayout() {
  return (
    <div  style={{backgroundColor:'#FF00FF'}}>
      <Navbar />  
      <DisplayCards />
      <Footer />
    </div>
  )
}

export default RootLayout
