import React from 'react'
import { IoWaterSharp } from 'react-icons/io5'
import { LuBadgeCheck } from 'react-icons/lu'
import { RiRecycleFill } from 'react-icons/ri'

const Features = () => {
  return (
    <div className='w-full py-7 bg-third'>
        <div className='w-[95%] md:w-[90%] lg:w-[85%] mx-auto h-full'>
            <div className='w-full h-full grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='w-full h-full flex flex-col items-center justify-center '>
                    <LuBadgeCheck className='size-10 md:size-12 lg:size-16'/>
                    <p className='text-center py-2 font-semibold text-xl lg:text-2xl font-overpass'>Quality Products</p>
                    <p className='text-center text-black/80 w-[95%] mx-auto text-sm lg:text-[15px] font-poppins'>The Premium VIP Umbrella combines style and functionality with its 30-inch size, semi-automatic opening, and durable fiberglass frame. Made from water-repellent Pongee fabric with UV protection, it ensures reliable coverage. The soft-touch silicone handle offers a comfortable grip, while its windproof design and shake-and-dry feature make it perfect for any weather. Sleek, lightweight, and built to last</p>
                </div>
                <div className='w-full h-full flex flex-col items-center justify-center '>
                    <IoWaterSharp className='size-10 md:size-12 lg:size-16'/>
                    <p className='text-center py-2 font-semibold text-xl lg:text-2xl font-overpass'>Water Proof</p>
                    <p className='text-center text-black/80 w-[95%] mx-auto text-sm lg:text-[15px] font-poppins'>100% waterproof, crafted with high-quality Pongee fabric and a waterproof coating to keep you dry in heavy rain. Its durable fiberglass frame and windproof design ensure reliability, while the shake-and-dry feature makes it easy to use on the go. Perfect for staying protected in any downpour.</p>
                </div>
                <div className='w-full h-full flex flex-col items-center justify-center '>
                    <RiRecycleFill className='size-10 md:size-12 lg:size-16'/>
                    <p className='text-center py-2 font-semibold text-xl lg:text-2xl font-overpass'>Eco Friendly</p>
                    <p className='text-center text-black/80 w-[95%] mx-auto text-sm lg:text-[15px] font-poppins'>Crafted with eco-friendly materials, this umbrella features a durable fiberglass frame and Pongee fabric, designed to minimize environmental impact. The water-repellent, UV-protective fabric ensures long-lasting use, reducing waste. Its lightweight design and shake-and-dry feature promote sustainability, making it a responsible choice for eco-conscious individuals seeking both functionality and environmental care.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features