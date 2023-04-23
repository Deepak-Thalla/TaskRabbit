import './AddCard.css'
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function AddCard() {
    let {register,handleSubmit}=useForm()
    let navigate=useNavigate()
    let [isButtonClicked,setIsButtonClicked]=useState(false)
    const func=()=>{
     navigate('/')
    }

    const submitForm=(cardobj)=>{
      setIsButtonClicked(true)
      axios.post('http://localhost:3500/create-card',cardobj)
      .then(res=>{
        console.log('res is',res)
      }) 
    }

  return (
    <div>
      <div className='col-10 col-sm-7 col-md-4 mx-auto'>
        <h5 className='text-center mt-2 mb-2'>Fill data to add a card</h5>
        <form className='mt-3 p-5  bg-secondary bg-opacity-75' onSubmit={handleSubmit(submitForm)}>
            <input type='text' className='form-control mb-2' id='front' placeholder='question' {...register('front') }  />
            <input type='text' className='form-control mb-2' id='back' placeholder='answer' {...register('back')}  />
            <button type='submit' className='btn btn-dark mt-2'>ADD CARD</button>
        </form>
        </div>
        {isButtonClicked===true&&<div className='mx-auto mt-3'>
        <h1 className='text-success text-center mx-auto'>Card added successfully !</h1>
        <button className='btn btn-dark view-cards-btn' onClick={func}>view cards</button>
        </div>}
    </div>
  )
}

export default AddCard
