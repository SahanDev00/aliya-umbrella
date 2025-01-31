import React from 'react'
import { FaHandHoldingHeart } from 'react-icons/fa'

const Reviews = () => {

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
        {
            img: 'https://t4.ftcdn.net/jpg/02/01/95/07/360_F_201950785_n6wkfVyKEVPZwmK16l8pGx7QxVRuoXzS.jpg',
            review: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus earum tenetur magni repellat"'
        },
        {
            img: 'https://cdn.eyeem.com/thumb/194f5635d858e69cd12da29afda5734da45e45f3-1551366377463/w/400',
            review: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus earum tenetur magni repellat"'
        },
        {
            img: 'https://images.pexels.com/photos/2698879/pexels-photo-2698879.jpeg',
            review: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus earum tenetur magni repellat"'
        },
        {
            img: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/0dd5aa37-211d-4d20-9ff9-b031ad2a7476.__CR0,0,1200,900_PT0_SX600_V1___.jpg',
            review: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus earum tenetur magni repellat"'
        },
        {
            img: 'https://media.istockphoto.com/id/496798851/photo/theyre-in-it-together.jpg?s=612x612&w=0&k=20&c=Fev_tP8O3l0TyIDQG4PzkwFf3GhirEybL6uIgIbKL14=',
            review: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus earum tenetur magni repellat"'
        },
        {
            img: 'https://image.made-in-china.com/202f0j00nyLQVEWRAZcJ/7-Nylon-Beach-Sun-Umbrella-height-adjustable-w-tilt-UV-30-.webp',
            review: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus earum tenetur magni repellat"'
        },
    ]

  return (
    <div className='w-full h-full bg-white py-5 mt-10'>
        <h1 className='text-4xl text-center uppercase font-thin mt-5 font-karla'>See what our customers say about us!</h1>
        <div className='w-[90px] h-[1px] mx-auto bg-black mt-2 mb-6'/>
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
            <div className='w-full h-full flex flex-col items-center justify-center sm:hidden mt-5'>
                <FaHandHoldingHeart className='size-16 text-amber' />
                <h1 className='my-4 text-2xl font-bold font-overpass'>FOLLOW US</h1>
                <button className='my-1 px-3 md:px-5 py-1 border font-roboto hover:border-fourth hover:bg-third text-sm md:text-[15px] rounded-3xl hover:scale-105 duration-200'>on Instagram <span className='font-semibold'>@example_instagram</span></button>
                <button className='my-1 px-3 md:px-5 py-1 border font-roboto hover:border-fourth hover:bg-third text-sm md:text-[15px] rounded-3xl hover:scale-105 duration-200'>on Facebook <span className='font-semibold'>@example_facebook</span></button>
                <button className='my-1 px-3 md:px-5 py-1 border font-roboto hover:border-fourth hover:bg-third text-sm md:text-[15px] rounded-3xl hover:scale-105 duration-200'>on TikTok <span className='font-semibold'>@example_tiktok</span></button>
            </div>
        </div>
    </div>
  )
}

export default Reviews