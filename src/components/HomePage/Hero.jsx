import React from 'react'
import pic from '../../assets/Hero.jpg'

const Hero = () => {

  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className='w-[90%] h-[90%] rounded-2xl border shadow-xl flex animateUp'>
            <div className='w-full rounded-2xl h-full relative bg-black'>
            <img src={pic} alt="Slide 1" className='w-full h-full object-cover rounded-xl opacity-60' />
                <div className='absolute m-auto inset-0 w-full h-full flex flex-col items-center justify-center'>
                    <h1 className='text-4xl text-center w-[80%] text-third font-bold uppercase'>Where Elegance Meets Functionality – Premium Umbrellas, Crafted to Perfection.</h1>
                    <button className='border bg-third/80 text-black hover:bg-amber/80 text-xl py-2 px-7 rounded-full hover:text-white duration-200 mt-6 border-black font-medium'>Experience the Art of Shelter</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero