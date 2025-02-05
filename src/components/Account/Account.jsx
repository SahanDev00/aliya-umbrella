import React from 'react'
import { FaRegEdit } from 'react-icons/fa'

const Account = () => {
  return (
    <div className='w-full min-h-[90vh] pt-28 bg-white'>
      <div className='w-[80%] mx-auto pt-5'>
        <h1 className='py-2 text-2xl uppercase font-roboto'>User's account</h1>
        <div className='w-full mt-5'>
          <div className='bg-third p-5 md:w-[400px] shadow font-karla mb-5 relative'>
            <FaRegEdit className='absolute right-2 top-2 cursor-pointer' />
            <p className='text-lg uppercase pb-2 font-poppins'>User's Information</p>
            <p className='pl-3'><span className='font-medium'>Name:</span> Mr. Dumidu Sahan</p>
            <p className='pl-3'><span className='font-medium'>Email:</span> Example@gmail.com</p>
            <p className='pl-3'><span className='font-medium'>Mobile Number:</span> +94717520661</p>
            <p className='pl-3'><span className='font-medium'>Password:</span> **********</p>
          </div>
          <div className='bg-third p-5 md:w-[500px] shadow font-karla mb-5 relative'>
            <FaRegEdit className='absolute right-2 top-2 cursor-pointer' />
            <p className='text-lg uppercase pb-2 font-poppins'>Shipping Information</p>
            <p className='pl-3'><span className='font-medium'>Address Line 1:</span> No: 21, Kurunegala</p>
            <p className='pl-3'><span className='font-medium'>Address Line 2:</span> Negombo Rd, Sri Lanka.</p>
            <p className='pl-3'><span className='font-medium'>Country:</span> Sri Lanka</p>
            <p className='pl-3'><span className='font-medium'>City:</span> Kurunegala</p>
          </div>
          <button className='px-5 py-2 border hover:bg-fourth duration-100 mb-10 md:mb-0'>My Orders</button>
        </div>
      </div>
    </div>
  )
}

export default Account