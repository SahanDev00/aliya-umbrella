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
                    <p className='text-center text-black/80 w-[95%] mx-auto text-sm lg:text-[15px] font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus earum tenetur magni repellat animi ab accusantium architecto soluta ex,lectus similique!</p>
                </div>
                <div className='w-full h-full flex flex-col items-center justify-center '>
                    <IoWaterSharp className='size-10 md:size-12 lg:size-16'/>
                    <p className='text-center py-2 font-semibold text-xl lg:text-2xl font-overpass'>Water Proof</p>
                    <p className='text-center text-black/80 w-[95%] mx-auto text-sm lg:text-[15px] font-poppins'>Lorem earum tenetur magni repellat animi ab accusantium architecto soluta ex, voluptatem fuga iusto itaque velit quos nemo necessitatibus delectus similique! itaque velit quos nemo necessitatibus delectus similique!</p>
                </div>
                <div className='w-full h-full flex flex-col items-center justify-center '>
                    <RiRecycleFill className='size-10 md:size-12 lg:size-16'/>
                    <p className='text-center py-2 font-semibold text-xl lg:text-2xl font-overpass'>Eco Friendly</p>
                    <p className='text-center text-black/80 w-[95%] mx-auto text-sm lg:text-[15px] font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus earum tenetur magni repellat animi ab accusantium ibus delectus similique!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features