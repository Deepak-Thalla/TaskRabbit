import './Navbar.css'
import React from 'react'
import { RxCardStackPlus } from "react-icons/rx";


function Navbar() {
  return (
    <div>
        <div className='d-flex bg-secondary bg-opacity-75'>
        <div className='fs-1 px-2'>
        <RxCardStackPlus></RxCardStackPlus>
        </div>
        <div>
            <h2 className='p-3 fw-bold'>FLASH CARDS</h2>
        </div>
        </div>  
    </div>
  )
}

export default Navbar
