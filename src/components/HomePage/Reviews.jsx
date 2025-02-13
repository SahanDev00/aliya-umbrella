import React from 'react'
import { FaHandHoldingHeart } from 'react-icons/fa'

const Reviews = () => {

    /* 
    const images = [
        {
            img: 'https://cdn.pixabay.com/photo/2017/04/28/13/34/young-woman-2268348_960_720.jpg',
            review: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus earum tenetur magni repellat"'
        },
        {
            img: 'https://www.irmi.com/DITA%20Import/Stanovich_ditamap_/person-with-an-umbrella.jpg',
            review: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus earum tenetur magni repellat"'
        },
        {
            img: 'https://roomsforrascals.ie/cdn/shop/products/120297-Umbrella-Flowers_Butterflies-_22_1.jpg?v=1665747593',
            review: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus earum tenetur magni repellat"'
        },
        {
            img: 'https://media.wired.com/photos/59323d6c58b0d64bb35d0691/master/w_1600%2Cc_limit/Umbrella-Outside.jpg',
            review: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus earum tenetur magni repellat"'
        },
        
    ]*/

  return (
    <div className='w-full h-full bg-white py-10 mt-10'>
        <h1 className='text-4xl text-center uppercase font-thin font-karla'>Our social Media</h1>
        <div className='w-[90px] h-[1px] mx-auto bg-black mt-2 mb-6'/>
        {/*
        <div className='w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto h-full grid grid-cols-1 sm:grid-cols-2 mt-5'>
            <div className='w-full h-full sm:flex flex-col items-center justify-center hidden'>
                <FaHandHoldingHeart className='size-20 text-amber' />
                <h1 className='my-4 text-2xl font-bold font-overpass'>FOLLOW US</h1>
                <button className='my-1 px-3 md:px-5 py-1 font-roboto border hover:border-fourth hover:bg-third text-sm md:text-[15px] rounded-3xl hover:scale-105 duration-200'>on Instagram <span className='font-semibold'>@example_instagram</span></button>
                <button className='my-1 px-3 md:px-5 py-1 font-roboto border hover:border-fourth hover:bg-third text-sm md:text-[15px] rounded-3xl hover:scale-105 duration-200'>on Facebook <span className='font-semibold'>@example_facebook</span></button>
                <button className='my-1 px-3 md:px-5 py-1 font-roboto border hover:border-fourth hover:bg-third text-sm md:text-[15px] rounded-3xl hover:scale-105 duration-200'>on TikTok <span className='font-semibold'>@example_tiktok</span></button>
            </div>
            <div className='w-full h-full py-5'>
                <div className='w-full h-full grid grid-cols-2 gap-3'>
                    {images.map((image, id) => (
                        <div key={id} className='w-full rounded-xl relative group overflow-hidden group'>
                            <img src={image.img} className='rounded-xl h-full w-full object-cover' alt="" />
                            <div className='w-full h-full flex sm:hidden absolute inset-0 mx-auto lg:flex items-center justify-center bg-black/60 group-hover:left-0 left-96 duration-300 cursor-pointer'>
                                <p className='text-white text-center text-[10px] sm:text-sm xl:text-[15px] font-poppins w-[95%]'>{image.review}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
             */}
            <div className='w-full h-full flex flex-col items-center justify-center mt-5'>
                <FaHandHoldingHeart className='size-16 text-amber' />
                <h1 className='my-4 text-2xl font-bold font-overpass'>FOLLOW US</h1>
                <button className='my-1 px-3 md:px-5 py-1 border font-roboto hover:border-fourth hover:bg-third text-sm md:text-[15px] rounded-3xl hover:scale-105 duration-200'>on Instagram <span className='font-semibold'><a href="https://www.instagram.com/aliya_umbrella/">@aliya_umbrella</a></span></button>
                <button className='my-1 px-3 md:px-5 py-1 border font-roboto hover:border-fourth hover:bg-third text-sm md:text-[15px] rounded-3xl hover:scale-105 duration-200'>on Facebook <span className='font-semibold'>@example_facebook</span></button>
                <button className='my-1 px-3 md:px-5 py-1 border font-roboto hover:border-fourth hover:bg-third text-sm md:text-[15px] rounded-3xl hover:scale-105 duration-200'>on TikTok <span className='font-semibold'>@example_tiktok</span></button>
            </div>
    </div>
  )
}

export default Reviews