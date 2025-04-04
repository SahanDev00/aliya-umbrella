import React from 'react'
import { Link } from 'react-router-dom'

const BuyNow = () => {
  return (
    <div className='w-full bg-white h-[260px] py-8'>
        <hr className='border-black/50'/>
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <h1 className='font-bold text-3xl md:text-4xl my-2 text-center w-[90%] font-overpass'>Rain or Shine, conquer the day with style.</h1>
            <p className='text-black/80 text-[15px] md:text-lg text-center font-poppins'>Your strength in every storm</p>
            <Link to='/products' >
              <button className='border border-black hover:bg-black w-[120px] mx-auto text-black hover:text-white mt-3 py-2 px-2 font-karla'>BUY NOW</button>
            </Link>
        </div>
    </div>
  )
}

export default BuyNow