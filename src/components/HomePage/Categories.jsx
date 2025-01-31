import React from 'react'
import premiumPic from '../../assets/premium.jpg'
import blackPic from '../../assets/black.jpg'
import childrenPic from '../../assets/children.jpg'
import colourfulPic from '../../assets/colourful.jpg'
import standPic from '../../assets/stand.webp'
import transparentPic from '../../assets/transparent.webp'

const Categories = () => {
  return (
    <div className='w-full mt-16 pb-10'>
        <div className='w-[90%]  md:h-[500px] lg:h-[700px] mx-auto'>
            <h1 className='text-2xl md:text-4xl text-center uppercase font-thin'>Our products are vary and stunning</h1>
            <div className='w-[90px] h-[1px] mx-auto bg-black mt-2 mb-6'/>
            <div className='w-full sm:flex gap-4'>
                <div className='w-full lg:w-2/3 xl:w-3/5 h-[150px] sm:h-[200px] lg:h-[300px] relative group lg:hover:w-4/5 rounded-xl border duration-300 cursor-pointer'>
                    <img src={colourfulPic} className='w-full h-full object-cover rounded-xl' alt="" />
                    <div className='absolute inset-0 m-auto rounded-xl w-full h-full flex flex-col bg-black/80 items-center justify-center'>
                        <h1 className='text-white text-xl lg:group-hover:text-4xl duration-300 uppercase text-center px-1'>Colourful Umbrellas</h1>
                    </div>
                </div>
                <div className='w-full mt-4 sm:mt-0 lg:w-2/6 xl:w-1/5 h-[150px] sm:h-[200px] lg:h-[300px] relative group lg:hover:w-4/5 rounded-xl border duration-300 cursor-pointer'>
                    <img src={blackPic} className='w-full h-full object-cover rounded-xl' alt="" />
                    <div className='absolute inset-0 m-auto rounded-xl w-full h-full flex flex-col bg-black/80 items-center justify-center'>
                        <h1 className='text-white text-xl lg:group-hover:text-4xl duration-300 uppercase text-center px-1'>For Black lovers</h1>
                    </div>
                </div>
                <div className='w-full mt-4 sm:mt-0 lg:w-2/6 xl:w-1/5 h-[150px] sm:h-[200px] lg:h-[300px] relative group lg:hover:w-4/5 rounded-xl border duration-300 cursor-pointer'>
                    <img src={premiumPic} className='w-full h-full object-cover rounded-xl' alt="" />
                    <div className='absolute inset-0 m-auto rounded-xl w-full h-full flex flex-col bg-black/80 items-center justify-center'>
                        <h1 className='text-white text-xl lg:group-hover:text-4xl duration-300 uppercase text-center px-1'>Premium & Luxary Umbrellas</h1>
                    </div>
                </div>
            </div>

            <div className='w-full sm:flex gap-4 mt-5'>
                <div className='w-full lg:w-2/6 xl:w-1/5 h-[150px] sm:h-[200px] lg:h-[300px] relative group lg:hover:w-4/5 rounded-xl border duration-300 cursor-pointer'>
                    <img src={standPic} className='w-full h-full object-cover rounded-xl' alt="" />
                    <div className='absolute inset-0 m-auto rounded-xl w-full h-full flex flex-col bg-black/80 items-center justify-center'>
                        <h1 className='text-white text-xl lg:group-hover:text-4xl duration-300 uppercase text-center px-1'>Stand & Beach Umbrellas</h1>
                    </div>
                </div>
                <div className='mt-4 sm:mt-0 w-full lg:w-2/6 xl:w-1/5 h-[150px] sm:h-[200px] lg:h-[300px] relative group lg:hover:w-4/5 rounded-xl border duration-300 cursor-pointer'>
                    <img src={childrenPic} className='w-full h-full object-cover rounded-xl' alt="" />
                    <div className='absolute inset-0 m-auto rounded-xl w-full h-full flex flex-col bg-black/80 items-center justify-center'>
                        <h1 className='text-white text-xl lg:group-hover:text-4xl duration-300 uppercase text-center px-1'>Children Umbrellas</h1>
                    </div>
                </div>
                <div className='mt-4 sm:mt-0 w-full lg:w-2/3 xl:w-3/5 h-[150px] sm:h-[200px] lg:h-[300px] relative group lg:hover:w-4/5 rounded-xl border duration-300 cursor-pointer'>
                    <img src={transparentPic} className='w-full h-full object-cover rounded-xl' alt="" />
                    <div className='absolute inset-0 m-auto rounded-xl w-full h-full flex flex-col bg-black/80 items-center justify-center'>
                        <h1 className='text-white text-xl lg:group-hover:text-4xl duration-300 uppercase text-center px-1'>transparent Umbrellas</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories