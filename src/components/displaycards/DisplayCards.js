import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import './DisplayCards.css';
function DisplayCards() {
    let [arr,setArr]=useState([])
   
   useEffect(()=>{
    axios.get("http://localhost:3500/get-card")
    .then((res)=>{
        setArr(res.data)
    })
    .catch(err=>console.log(err))
   },[])

  return (
    <div className='container' >
      {/* <button className='btn btn-info' onClick={func}>click</button> */}
      {arr.length!=0&&
       <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-4'>
         {
              arr.map(item=>
                <div className='col' key={item._id}>
                  <div className='card card-body mb-3 bg-dark pt-2 bg-opacity-75' style={{border:'2px solid black'}}>
                    <h6 className='text-bold text-white'>Question:</h6>
                    <h4 className='lead text-white'>{item.front}</h4>
                    <h6 className='fw-bold text-white'>Answer:</h6>
                    <h4 className='lead text-white'>{item.back}</h4>
                  </div>
                </div>
                )
         }
      </div> }
      {arr.length==0 &&
        <div>
        <h1 className='text-center mt-5'>No cards to show at the moment !</h1>
        </div>
      }
    </div>
  )
}

export default DisplayCards
