import React from 'react'
import premiumPic from '../../assets/premium.jpg'
import blackPic from '../../assets/black.jpg'
import childrenPic from '../../assets/children.jpg'
import colourfulPic from '../../assets/colourful.jpg'
import standPic from '../../assets/stand.webp'
import transparentPic from '../../assets/transparent.webp'

const Categories = () => {
  return (
    <div className='w-full mt-16'>
        <div className='w-[90%] h-[700px] mx-auto'>
            <h1 className='text-4xl text-center text-amber pb-6 uppercase font-bold'>Our products are vary and stunning</h1>
            <div className='w-full flex gap-4'>
                <div className='w-3/5 h-[300px] relative group hover:w-4/5 rounded-xl border duration-300 cursor-pointer'>
                    <img src={colourfulPic} className='w-full h-full object-cover rounded-xl' alt="" />
                    <div className='absolute inset-0 m-auto rounded-xl w-full h-full flex flex-col bg-black/80 items-center justify-center'>
                        <h1 className='text-white text-xl group-hover:text-4xl duration-300 uppercase text-center px-1'>Colourful Umbrellas</h1>
                    </div>
                </div>
                <div className='w-1/5 h-[300px] relative group hover:w-4/5 rounded-xl border duration-300 cursor-pointer'>
                    <img src={blackPic} className='w-full h-full object-cover rounded-xl' alt="" />
                    <div className='absolute inset-0 m-auto rounded-xl w-full h-full flex flex-col bg-black/80 items-center justify-center'>
                        <h1 className='text-white text-xl group-hover:text-4xl duration-300 uppercase text-center px-1'>For Black lovers</h1>
                    </div>
                </div>
                <div className='w-1/5 h-[300px] relative group hover:w-4/5 rounded-xl border duration-300 cursor-pointer'>
                    <img src={premiumPic} className='w-full h-full object-cover rounded-xl' alt="" />
                    <div className='absolute inset-0 m-auto rounded-xl w-full h-full flex flex-col bg-black/80 items-center justify-center'>
                        <h1 className='text-white text-xl group-hover:text-4xl duration-300 uppercase text-center px-1'>Premium & Luxary Umbrellas</h1>
                    </div>
                </div>
            </div>

            <div className='w-full flex gap-4 mt-5'>
                <div className='w-1/5 h-[300px] relative group hover:w-4/5 rounded-xl border duration-300 cursor-pointer'>
                    <img src={standPic} className='w-full h-full object-cover rounded-xl' alt="" />
                    <div className='absolute inset-0 m-auto rounded-xl w-full h-full flex flex-col bg-black/80 items-center justify-center'>
                        <h1 className='text-white text-xl group-hover:text-4xl duration-300 uppercase text-center px-1'>Stand & Beach Umbrellas</h1>
                    </div>
                </div>
                <div className='w-1/5 h-[300px] relative group hover:w-4/5 rounded-xl border duration-300 cursor-pointer'>
                    <img src={childrenPic} className='w-full h-full object-cover rounded-xl' alt="" />
                    <div className='absolute inset-0 m-auto rounded-xl w-full h-full flex flex-col bg-black/80 items-center justify-center'>
                        <h1 className='text-white text-xl group-hover:text-4xl duration-300 uppercase text-center px-1'>Children Umbrellas</h1>
                    </div>
                </div>
                <div className='w-3/5 h-[300px] relative group hover:w-4/5 rounded-xl border duration-300 cursor-pointer'>
                    <img src={transparentPic} className='w-full h-full object-cover rounded-xl' alt="" />
                    <div className='absolute inset-0 m-auto rounded-xl w-full h-full flex flex-col bg-black/80 items-center justify-center'>
                        <h1 className='text-white text-xl group-hover:text-4xl duration-300 uppercase text-center px-1'>transparent Umbrellas</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories