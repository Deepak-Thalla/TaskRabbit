import React from 'react'
import './Footer.css'
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate=useNavigate()
  return (
    <div className='wrapper'>
      <button className='btn btn-success mt-2 fs-4' id='btn' onClick={()=>navigate('/addcard')}><IoMdAdd />AddCard</button>
    </div>
  )
}

export default Footer
