import React from 'react'
import { Link } from 'react-router-dom'

const Details = () => {
  return (
    <div className='w-[70%] h-full flex justify-between items-center m-auto p-[10%]'>
        <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt='' className='h-[80%] w-[40%] object-contain '></img>
        <div className='content w-[50%]'>
            <h1 className='text-4xl'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1> 
            <h3 className='text-zinc-500 my-5'>men's clothing</h3>
            <h2 className='text-red-300 mb-3'>$109.95</h2>
            <p className='mb-[5%]'>Your perfect pack for everyday use and walks in the forest.
             Stash your laptop (up to 15 inches) in the padded sleeve,
              your everyday</p>
            <Link  className='py-3 px-5 border rounded mb-3 border-blue-200 text-blue-300 mr-5'>Edit</Link>
            <Link  className='py-3 px-5 border rounded mb-3 border-blue-200 text-blue-300'>Delete</Link>
        </div>
      
    </div>
  )
}

export default Details
