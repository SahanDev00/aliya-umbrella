import React from 'react'
import { Link } from 'react-router-dom'

const Collection = () => {
  return (
    <div className='w-full min-h-[80vh] pt-28 bg-white'>
      <div className='w-[80%] mx-auto h-full pb-10'>
          <p className='text-black font-semibold font-karla'>
            <Link to='/products'>
                <span className='hover:underline cursor-pointer'>Store</span> {' > '}
            </Link> 
            <Link to='/collection'>
                <span className='hover:underline cursor-pointer'>Collection</span>
            </Link>
          </p>

          <div className='w-full h-full md:flex gap-4 md:mt-5'>
            <div className='w-full md:w-2/6 border mt-3 md:mt-0 h-[150px] lg:h-[200px]'>

            </div>
            <div className='w-full md:w-2/3 border mt-3 md:mt-0 h-[150px] lg:h-[200px]'>

            </div>
            <div className='w-full md:w-2/6 border mt-3 md:mt-0 h-[150px] lg:h-[200px]'>

            </div>
          </div>
          <div className='w-full h-full md:flex gap-4 md:mt-5'>
            <div className='w-full md:w-2/3 border mt-3 md:mt-0 h-[150px] lg:h-[200px]'>

            </div>
            <div className='w-full md:w-2/6 border mt-3 md:mt-0 h-[150px] lg:h-[200px]'>

            </div>
            <div className='w-full md:w-2/6 border mt-3 md:mt-0 h-[150px] lg:h-[200px]'>

            </div>
          </div>
          <div className='w-full h-full md:flex gap-4 md:mt-5'>
            <div className='w-full md:w-2/6 border mt-3 md:mt-0 h-[150px] lg:h-[200px]'>

            </div>
            <div className='w-full md:w-2/6 border mt-3 md:mt-0 h-[150px] lg:h-[200px]'>

            </div>
            <div className='w-full md:w-2/3 border mt-3 md:mt-0 h-[150px] lg:h-[200px]'>

            </div>
          </div>
      </div>
    </div>
  )
}

export default Collection